import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { UserInvoicesService } from './user-invoices.service';
import { SendInvoiceDto } from './dto/send-invoice.dto';

@Controller('user-invoices')
export class UserInvoicesController {
  constructor(private readonly InvoicesService: UserInvoicesService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async postInvoicesToTelegramBot(@Body() SendInvoiceDto: SendInvoiceDto) {
    await this.InvoicesService.sendInvoiceToTGBot(SendInvoiceDto);
    return {
      message: 'Message Successfully send to Telegram Bot',
      userData: SendInvoiceDto,
    };
  }
}
