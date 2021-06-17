export class ControleTechniqueModel { 

    constructor(data: Partial<ControleTechniqueModel>){
        Object.assign(this, data);
    }
    public facture:String;
    public dateAmc:Date;
    public dateApe:Date;
    public dateIncm:Date;
    public datePeremption:Date;
    public dateRecEch:Date;
    public numIncm:String;
    public numLot:String;
    public numApe:String;
    public origine:String;
    public provenance:String;
    public quantite:String;
    public produit:String;



    
}