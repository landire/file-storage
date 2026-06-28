import fs from "fs";
import File from "../models/File.js";
import config from "config";

class FileService {
  createDir(file) {
    const filePath = `${config.get("filePath")}\\${file.user}\\${file.path}`;

    return new Promise((res, rej) => {
      try {
        if (!fs.existsSync(filePath)) {
          fs.mkdirSync(filePath);
          res({ message: "File was created" });
        } else {
          return rej({ message: "File already exist" });
        }
      } catch (e) {
        console.log(e);
        return rej({ message: "File error" });
      }
    });
  }
}

export default new FileService()
