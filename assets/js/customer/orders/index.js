import BasePage from '../../basePage';

class Index extends BasePage {
    onReady() {
        this.initiateLoadingMore();
    }

    initiateLoadingMore() {
        salla.infiniteScroll.initiate('.orders-container', '.order-row', {
            history        : false,
            scrollThreshold: false
        });
    }
}

new Index;