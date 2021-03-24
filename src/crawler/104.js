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
    const key = `前端工程師`;
    await page.goto(
      `https://www.104.com.tw/jobs/search/?ro=0&kwop=7&keyword=${key}&order=12&asc=0&page=${filterPage}&mode=s`
    );
    // 等待網頁載入完成 html
    await page.waitForSelector('section');
    // 抓取網頁的 body
    let body = await page.content();
    let $ = await cheerio.load(body);

    await $(
      `main #main-content .jobs-content .job-list #js-job-content article.job-list-item .b-block__left`
    ).each((index, node) => {
      const $list = cheerio.load($(node).html());
      let salaryFilter = $list('div.job-list-tag span.b-tag--default')
        .text()
        .split(['元'])[0];
      let salary = '';
      if (
        salaryFilter.slice(0, 2) === '月薪' ||
        salaryFilter.slice(0, 2) === '年薪'
      ) {
        salary = `${salaryFilter}元`;
      } else {
        salary = `待遇面議`;
      }

      let tempData = {
        title: $list('h2.b-tit a').text().trim(), // 使用 trim() 清除頭尾可能的空字串
        companyName: $list('ul.b-list-inline li a').text().trim(),
        companyAddress: `${
          $list('ul.job-list-intro li').text().split(['區'])[0]
        }區`,
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

  fs.writeFileSync('src/crawler/result-104.json', JSON.stringify(filterResult));

  await browser.close();
})();
