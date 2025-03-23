const axios = require('axios');

describe('CoverPhotos API', () => {
  test('GET should return all cover photos', async () => {
    const response = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/CoverPhotos');
    console.log(response)
    expect(response.status).toEqual(200);
    expect(response.data).toBeTruthy();
  });


  test('POST should return all cover photos', async () => {
  const response = await axios.post('https://fakerestapi.azurewebsites.net/api/v1/CoverPhotos', {
      id: 0,
      idBook: 0,
      url: "string"
    });
    console.log(response)
     expect(response.status).toEqual(200);
     expect(response.data).toBeTruthy();
     expect(response.data.id).toEqual(0);
     expect(response.data.idBook).toEqual(0);
     expect(response.data.url).toEqual("string");
  });


  test('GET should return all cover photos', async () => {
    const response = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/CoverPhotos/books/covers/1');
    console.log(response)
    expect(response.status).toEqual(200);
    expect(response.data).toBeTruthy();
  });

  test('GET should return all cover photos', async () => {
    const response = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/CoverPhotos/2');
    console.log(response)
     expect(response.status).toEqual(200);
     expect(response.data).toBeTruthy();
  });

  test('PUT should return all cover photos', async () => {
    const response = await axios.put('https://fakerestapi.azurewebsites.net/api/v1/CoverPhotos/1', {
        id: 0,
        idBook: 0,
        url: "string"
      });
    console.log(response)
   expect(response.status).toEqual(200);
   expect(response.data).toBeTruthy();
   expect(response.data.id).toEqual(0);
   expect(response.data.idBook).toEqual(0);
   expect(response.data.url).toEqual("string");
  });

  test('DELETE should return all cover photos', async () => {
    const response = await axios.delete('https://fakerestapi.azurewebsites.net/api/v1/CoverPhotos/3');
    console.log(response)
   expect(response.status).toEqual(200);
  });
})