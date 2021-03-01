const City = require('../src/Models/City');
test('City create model', () => {
    let city_data = {
        id:1,
        city:'DaleVille',
        city_ascii:'DaleVille',
        lat:56,
        lng:42,
        country:'Daletopia',
        iso2:'DT',
        iso3:'DAL',
        admin_name:'DaleVille',
        capital:'primary',
        population: '5642'
    };
    let result = City.create(city_data);
    expect(result).toBeInstanceOf(City);
    expect(result.id).toBe(1);
    expect(result.city).toBe('DaleVille');
    expect(result.city_ascii).toBe('DaleVille');
    expect(result.lat).toBe(56);
    expect(result.lng).toBe(42);
    expect(result.iso2).toBe('DT');
    expect(result.iso3).toBe('DAL');
    expect(result.admin_name).toBe('DaleVille');
    expect(result.capital).toBe('primary');
});