import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { VCard,VCardDocument } from './schema';
import { UpdateVCardDto } from './update-vcard.dto';
@Injectable()
export class VCardService {
  constructor(@InjectModel(VCard.name) private vCardModel: Model<VCardDocument>) {}

  // Create and save a new VCard
  async create(vCardData: any): Promise<VCard> {
    const createdVCard = new this.vCardModel(vCardData);
    return createdVCard.save();
  }

  // Retrieve all VCards
  async findAll(): Promise<VCard[]> {
    return this.vCardModel.find().exec();
  }

  // Find a VCard by its ID
  async findById(id: string): Promise<VCard> {
    const vCard = await this.vCardModel.findById(id).exec();
    if (!vCard) {
      throw new NotFoundException(`VCard with ID ${id} not found`);
    }
    return vCard;
  }

  async update(id: string, updateVCardDto: UpdateVCardDto): Promise<VCard> {
    const updatedVCard = await this.vCardModel.findByIdAndUpdate(id, updateVCardDto, {
      new: true, // Return the updated document
      runValidators: true, // Ensure validation rules are applied
    });

    if (!updatedVCard) {
      throw new NotFoundException(`VCard with ID ${id} not found`);
    }

    return updatedVCard;
  }

  async deleteUser(id:string){
    return await this.vCardModel.deleteOne({_id:id})
  }
}
