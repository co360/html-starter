import * as nsmylib from "./namespace-mylib";
export class NsMyLibHello {
    name = "World"
    greeting() {
        return "Hello " + this.name;
    }
}
nsmylib.context.NsMyLibHello = NsMyLibHello;
