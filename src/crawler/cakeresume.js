const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  let end = true;
  const data = [];
  let filterPage = 1;
  let lastPage = 60;
  while (end) {
    let url = `https://www.cakeresume.com/jobs?refinementList%5Bprofession%5D%5B0%5D=tech_front-end-development&refinementList%5Bjob_type%5D%5B0%5D=full_time`;
    let type = `per_month`;
    await page.goto(
      `${url}&refinementList%5Bsalary_type%5D=${type}&page=${filterPage}`
    );
    // 抓取網頁的 body
    let body = await page.content();
    let $ = await cheerio.load(body);

    await $(
      `#root .main-container .share-page-modal-wrapper .ais-InstantSearch__root .jobs-and-companies .row .no-padding-in-mobile .jobs-search-container .jobs-and-companies_job-or-company-list .well-list-item-link .job-item`
    ).each((index, node) => {
      const $list = cheerio.load($(node).html());
      let title = $list(
        `.job-list-item-content h2.job-title .job-link-wrapper a`
      )
        .text()
        .trim();
      let companyName = $list(`.job-list-item-content h5.page-name a`)
        .text()
        .trim();
      let companyAddress = $list(
        `.job-list-item-tags .info-section div .location-section span.middot a`
      )
        .text()
        .trim();
      let salary = $list(
        `.job-list-item-tags .info-section .job-salary-section span.job-salary`
      )
        .text()
        .trim();

      let tempData = {
        title: title,
        companyName: companyName,
        companyAddress: companyAddress,
        salary: salary,
      };

      data.push(tempData);
    });
    filterPage++;
    console.log(`第${filterPage}頁`);

    if (filterPage > lastPage) {
      end = false;
    }
  }

  const uniqueArray = data.filter(
    (node, index, value) =>
      value.findIndex(
        (subNode) =>
          subNode.title === node.title &&
          subNode.companyName === node.companyName
      ) === index
  );

  const filterResult = uniqueArray.filter((node) => {
    return node.title.indexOf('後端', 0) === -1;
  });

  fs.writeFileSync('src/crawler/cake-month.json', JSON.stringify(filterResult));

  await browser.close();
})();
