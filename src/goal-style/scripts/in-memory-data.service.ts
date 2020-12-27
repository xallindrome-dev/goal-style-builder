export class InMemoryDataService {
    createDb() {
        let meals = [];

        let groceryList = [
            { id: 1, ingredients: [], ts: new Date() }
        ];

        return { meals, groceryList };
    }
}