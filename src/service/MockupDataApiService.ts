
export interface TodoTaskInterface {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

export default class MockupDataApiService {

  public static async getTodos(): Promise<Array<TodoTaskInterface>> {

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const json = await response.json();
    
      if (Array.isArray(json)) {
        return json;
      } else {
        console.log('Invalid response format:', json);
        return [];
      }
    } catch (error) {
      console.log(error);
      return [];
    }
  }

}