import { AbstractDocument } from "@app/common";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({versionKey:false})
export class ReservationDocument extends AbstractDocument{

    @Prop({default: Date.now()})
    timestamp: Date;

    @Prop({default: Date.now()})
    startDate: Date;
    
    @Prop()
    endDate: Date;

    @Prop()
    userId: string;

    @Prop()
    placeId: string;

    @Prop()
    invoiceId: string;
}

export const ReservationSchema= SchemaFactory.createForClass(ReservationDocument);