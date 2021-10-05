import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type VantDocument = Vant & Document;

@Schema()
export class Vant {
  @Prop()
  registrationCode: string;

  @Prop()
  name: string;

  @Prop([String])
  flights: string[];
}

export const VantSchema = SchemaFactory.createForClass(Vant);
