import { AppModule } from "./app.module";

interface AppModel {}

enum APPLICATION {
    SHORT_NAME = 'hms',
    LONG_NAME = 'Hiring Management System'
}

interface HealthCheck extends AppModel {
    status: string;
    message: string;
}

interface ApplicationInformation extends AppModel {
    name: string;
    description: string;
    version: string;
}

export class ApplicationInfo {

    getApplicationInfo<T>(ApplicationInfo: T): T {
        return ApplicationInfo

    }

    healthCheck<T>(healthCheck: T): T{
        return healthCheck
    }

    getApplicationShortName<T>(ApplicationShortName: T): T {
        return ApplicationShortName
    }
        
}

export { AppModel, HealthCheck, ApplicationInformation, APPLICATION };
