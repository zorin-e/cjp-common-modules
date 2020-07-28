const { StorageMock, Storage } = require("@/infrastructure/Storage");

describe("Storage Get", () => {

  it("storage get should get seted data", () => {
    let store = {};
    const data = { payload:  {token: 'test data'}}
    const storage = new Storage(
        new StorageMock(store)
    )

    storage.set('token', {token: 'test data'})
    expect(storage.get('token')).toEqual(data);
  });

  it("storage should delete seted data", () => {
    let store = {};
    const storage = new Storage(
        new StorageMock(store)
    )

    storage.set('token', {token: 'test data'})
    storage.delete('token')
    expect(storage.get('token')).toEqual({payload: undefined});
  });

});