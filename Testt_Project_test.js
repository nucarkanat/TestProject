Feature('Testt Project');

Scenario('Login', (I) => {
    I.amOnPage('http://automationpractice.com/index.php');
    I.click({ xpath: '//*[@id="header"]/div[2]/div/div/nav/div[1]/a' });
    I.fillField('#email', 'nursena.ucarkanat@gmail.com');
    I.fillField('#passwd', 'fgh456');
    I.click({ xpath: '//*[@id="SubmitLogin"]/span' });

});

Scenario('Search for an Item', (I) => {
    I.amOnPage('http://automationpractice.com/index.php');
    I.click({ xpath: '//*[@id="search_query_top"]' });
    I.fillField('#search_query_top', 'Blouse');
    I.click({ xpath: '//*[@id="searchbox"]/button' });

});

Scenario('Add to Cart', (I) => {
    I.amOnPage('http://automationpractice.com/index.php');
    I.click({ xpath: '//*[@id="block_top_menu"]/ul/li[2]/a' });
    I.click({ xpath: '//*[@id="subcategories"]/ul/li[3]/div[1]/a/img' });
    I.click({ xpath: '//*[@id="center_column"]/ul/li[3]/div/div[2]/div[2]/a[1]/span' });
    I.click({ xpath: '//*[@id="layer_cart"]/div[1]/div[1]/span' });
    I.click({ xpath: '//*[@id="header"]/div[3]/div/div/div[3]/div/a/b' });   

});
