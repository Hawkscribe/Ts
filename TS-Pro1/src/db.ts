
import mongoose, {model, Schema} from "mongoose";
const MONGO_URI=process.env.MONGO_URI;
if (!MONGO_URI) {
throw new Error("The mongo uri is not present");
}
try {
    mongoose.connect(MONGO_URI);

} catch (error) {
console.log("error in connecting to the database ");    
}
console.log("The mongoose have been connected");
const UserSchema = new Schema({
    username: {type: String, unique: true},
    password: String
})

export const UserModel = model("User", UserSchema);

const ContentSchema = new Schema({
    title: {type:String,unique:true},
    link: String,
    tags: [{type: mongoose.Types.ObjectId, ref: 'Tag'}],
    type: String,
    userId: {type: mongoose.Types.ObjectId, ref: 'User', required: true },
})

const LinkSchema = new Schema({
    hash: String,
    userId: {type: mongoose.Types.ObjectId, ref: 'User', required: true, unique: true },
})

const tagSchema=new mongoose.Schema({
  tittle:{
      type:String,
      required:true,
      unique:true,
  }
})
export const Tag=mongoose.model('Tag',tagSchema);


export const LinkModel = model("Links", LinkSchema);
export const ContentModel = model("Content", ContentSchema);