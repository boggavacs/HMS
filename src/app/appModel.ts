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

interface Info extends AppModel {
    name: string;
    description: string;
    version: string;
}

export { AppModel, HealthCheck, Info, APPLICATION };
