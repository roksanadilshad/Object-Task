let myObject = {
      name: 'John Doe',
      age: 25,
      city: 'Example City',
      isStudent: true
  };
  const keys = Object.keys(myObject) // myObject er array banaba
 for(const key of keys){ // ai key er vitor sob array k                           variable e likhba pore loop banaba
   // const value = myObject[key]; 
    const type = typeof value;
   //  console.log(`${key}: ${value} (type: ${type})`);
    console.log(`key: ${key} | (type: ${type})`);
 }