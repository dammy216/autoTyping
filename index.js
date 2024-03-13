const { Builder, By, Key, until } = require("selenium-webdriver");

(async function example() {
  let driver = await new Builder().forBrowser("chrome").build(); //サイト立ち上げ
  await driver.get("https://typing.twi1.me/game/131230"); //URLへ移動

  //以下のクラスネームが見つかるまで待機（10秒以内)
  await driver.wait(
    until.elementLocated(By.className("mtjSeSc-settingBtn mtjRectBtn")),
    10000
  );
  await driver.sleep(1500);
  await driver.findElement(By.css("body")).sendKeys(Key.SPACE); //スペースキーを送る
  await driver.sleep(2000); //待機時間2秒
  await driver.findElement(By.css("body")).sendKeys(Key.SPACE);
  await driver.sleep(2000);
  await driver.findElement(By.css("body")).sendKeys(Key.SPACE);

  //typing自動化ループ
  while (true) {
    let text = await driver
      .findElement(By.css(".mtjGmSc-roma .mtjNowInput")) //指定したcssの要素をtextに格納
      .getText();

    await driver.findElement(By.css("body")).sendKeys(text); //textの文字を送ることで自動入力する
  }
})();
