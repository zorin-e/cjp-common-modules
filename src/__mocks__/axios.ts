const mockAxios = jest.genMockFromModule("axios");

//@ts-ignore
mockAxios.create = jest.fn(() => mockAxios);
//@ts-ignore
mockAxios.put = jest.fn(() =>
  Promise.resolve({
    data: {
      status: 200
    }
  })
);
//@ts-ignore
mockAxios.post = jest.fn(() =>
  Promise.resolve({
    data: {
      status: 200
    }
  })
);

export default mockAxios;
