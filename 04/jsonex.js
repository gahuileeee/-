//JSON

// 1. Object to Json
// stringfy (obj)
let json= JSON.stringify(true);
console.log(json);

json= JSON.stringify(['apple','banana']);
console.log(json);

const rabbit ={
  name: 'tori',
  color: null,
  size: null,
  birthDate: new Date(),
  jump:() =>{
    connsol.log(`${name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json);
// 여기서 jump 함수는 json에서 제외되었음.

json = JSON.stringify(rabbit, ['name']);
// 이렇게 하면 이름만 json으로 변환이 됨.

json = JSON.stringify(rabbit, (key, value)=> {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'name' ? 'ellie' : value;
  // key가 name이면 value 값으로 ellie를 return 아니면 그냥 그대로.
  // 이름이 tori에서 -> ellie로 변환됨.
});

// 2. JSON to Object
// parse(json)
console.clear();
json=JSON.stringify(rabbit);
const obj=JSON.parse(json);
console.log(obj);
rabbit.jump();
obj.jump(); //이 친구는 오류가 남. data만 포함되고 함수는 포함되지 않았으니까

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());
// 마찬가지로 이 친구는 오류가 남. date type이 아닌, string type이기 때문에
// (object->json으로 할 때 String으로 변환되기 때문에, json-> object로 변환될 때도 type은 String이 됨)

const obj= JSON.parse(json,(key,value)=>{
  return key === 'birthDate' ? new Date(value) : value;
});
// 이렇게 Date type으로 다시 받을 수 있음.

