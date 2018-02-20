interface ProgramaBase {
	getNombre():string;
	getVersion():number;
}

class Programa implements ProgramaBase{
	public nombre:string;
	public version:number;

	public setNombre(nombre:string) {
		this.nombre = nombre;
	}
	public getNombre() {
		return this.nombre;
	}
	public setVersion(version:number) {
		this.version = version;
	}
	public getVersion() {
		return this.version;
	}
}

class Editorvideo extends Programa {
	public timeline:number;

	public setTimeLine(timeline:number) {
		this.timeline = timeline;
	}

	public getTimeLine() {
		return this.timeline;
	}
}

var editor = new Editorvideo();
editor.setNombre("Camtasia Studio");
editor.setVersion(8);
editor.setTimeLine(4000);

console.log("El editor se llama: "+editor.getNombre());
console.log("El editor es version: "+editor.getVersion()+" y tiene un timeline de: "+editor.getTimeLine());