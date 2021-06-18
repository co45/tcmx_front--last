export class suivi { 
    constructor(data: Partial<suivi>){
        Object.assign(this, data);
    }
    public  numdeclaration:String;
    public  observation:String;
    public  shipment:String;
    public  datearrivefp:Date;
    public  datedeclaration:Date;
    public  datearrivestock:Date;
    public  facture: String;
    public  reception: String;
    public  datereception:Date;
    public  montantfacture:String;
}