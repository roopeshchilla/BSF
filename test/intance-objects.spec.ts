import { SampleService } from '../src/services/sample.service';
import { SampleController } from '../src/controllers/sample.controller';
import { PermissionController } from '../src/controllers/permission.controller';

describe('Instance Objects Test', () => {
	describe('Sample object instance', () => {
		it('should instantiate sample objects', async (done) => {
			const sampleService = new SampleService();
			const sampleController = new SampleController(sampleService);
			sampleController.getValidationSchema();
			sampleController.getEndpointPermission();
			sampleService.getSchemaName();	
			done();
		});
	});

	describe('Permission object instance', () => {
		it('should instantiate permission objects', async (done) => {
			const permissionController = new PermissionController(null);
			permissionController.getValidationSchema();
			permissionController.getEndpointPermission();
			done();
		});
	});
});