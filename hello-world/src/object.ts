let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "John",
  retire: function (date: Date) {
    console.log("Retired on " + date);
  },
};

employee.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.
employee.name = "Doe"; // Works fine

console.log(employee.id);
console.log(employee.name);
