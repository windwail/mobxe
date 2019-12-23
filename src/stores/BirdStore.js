import { observable, computed, action} from "mobx";

class BirdStore {
    @observable
    birds = [];

    @computed
    get birdsCount() {
        return this.birds.length;
    }

    @action
    addBird(bird) {
        this.birds.push(bird);
    }

}

const stores = new BirdStore();
export default stores;