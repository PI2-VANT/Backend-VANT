import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type VantDocument = Vant & Document;

@Schema()
export class Vant {
  @Prop({ required: true, unique: true })
  registrationCode: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  userId: string;
}

export const VantSchema = SchemaFactory.createForClass(Vant);
