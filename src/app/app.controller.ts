import { Controller, Get, Request, Response } from '@nestjs/common';
import { HealthCheck, Info, APPLICATION } from './appModel';
import { ConfigService } from '@nestjs/config';


@Controller('hms')
export class AppController {
    appShortName = ''; 

    constructor(private configService: ConfigService) {
        this.appShortName = this.configService.get<string>('APP_SHORT_NAME') || '';
        console.log('App short name:', this.appShortName);
    }

    @Get('/health') 
    checkApplicationHealth(): HealthCheck {
        return {
            status: 'UP',
            message: 'Application is running'
        }
    }

    @Get('/info')
    getInfo(): Info {
        return {
            name: 'Hiring Management System',
            description: 'Hiring management system',
            version: '1.0.0'
        }
    }
}