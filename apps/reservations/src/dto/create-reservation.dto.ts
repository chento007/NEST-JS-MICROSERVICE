import { IsDate, IsNotEmpty, IsString } from "class-validator";

export class CreateReservationDto {

    @IsDate()
    timestamp: Date;

    @IsDate()
    startDate: Date;

    @IsDate()
    endDate: Date;

    @IsString()
    @IsNotEmpty()
    placeId: string;

    @IsString()
    @IsNotEmpty()
    invoiceId: string;
}
