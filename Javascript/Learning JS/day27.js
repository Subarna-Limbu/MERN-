// grocerySchema with validation
const grocerySchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, "Name is required"], 
    minlength: [2, "Name must be at least 2 characters long"] 
  },
  quantity: { 
    type: Number, 
    default: 1, 
    min: [1, "Quantity must be at least 1"] 
  },
  purchased: { 
    type: Boolean, 
    default: false 
  }
});
