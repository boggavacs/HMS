import { Controller, Get, Request, Response } from '@nestjs/common';
import { HealthCheck, ApplicationInformation, APPLICATION} from './appModel';
import { ApplicationInfo } from './appModel';
import { ConfigService } from '@nestjs/config';


@Controller('hms')
export class AppController {
    appShortName = ''; 

    constructor(
        private configService: ConfigService, 
        private applicationInfo: ApplicationInfo) 
    {
        this.appShortName = this.configService.get<string>('APP_SHORT_NAME') || '';
        console.log('App short name:', this.appShortName);
    }

    @Get('/health') 
    checkApplicationHealth(): HealthCheck {
        return this.applicationInfo.healthCheck<HealthCheck>({
            status: 'UP',
            message: 'Application is running'
        });
    }

    @Get('/info')
    getInfo(){
        return this.applicationInfo.getApplicationInfo<ApplicationInformation>({
            name: APPLICATION.LONG_NAME,
            description: 'Hiring management system',
            version: '1.0.0'
        });
    }
}