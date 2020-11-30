'use strict';

import { SampleModel } from '../models/sample.model';
import { VinValidationModel } from '../models/vinvalidation.model';
import { BaseService } from '../framework/base.service';
import * as request from 'request';
import {ApiServer} from '../api-server';



export class VinValidationService extends BaseService<VinValidationModel> {

    /**
     * All services of BaseService are inherited
     * To build the specific services of this layer just create them here
     */

    public getSchemaName() {
        return 'sample.model';
    }

    public getVinData(){
       
        var options = {
            url:ApiServer.configFilesMap.get("VinValidation.json").vinurl,
            headers: {
                'User-Agent': 'request'
            }
        };
        
         
        //Later call the actual Vin validation url through request
/*
        return new Promise(function(resolve, reject) {
            // Do async job
            request.get(options, function(err, resp, body) {
               
                if (err) {
                    reject(new Error("Invalid Vin URL"));
                    //throw new Error("Invalid Vin URL");
                } else {
                    resolve(body);
                }
                
            })
        })
 */      
  

  
 return new Promise<string>((resolve, reject) => {
    resolve ('{"Count":7001,"Message":"Results returned successfully. NOTE: Any missing decoded values should be interpreted as NHTSA does not have data on the specific variable. Missing value should NOT be interpreted as an indication that a feature or technology is unavailable for a vehicle.","SearchCriteria":"VIN(s): 5UXWX7C5*BA","Results":[{"ABS":"","ActiveSafetySysNote":"","AdaptiveCruiseControl":"","AdaptiveDrivingBeam":"","AdaptiveHeadlights":"","AdditionalErrorText":"","AirBagLocCurtain":"","AirBagLocFront":"1st Row (Driver & Passenger)","AirBagLocKnee":"","AirBagLocSeatCushion":"","AirBagLocSide":"1st Row (Driver & Passenger)","AutoReverseSystem":"","AutomaticPedestrianAlertingSound":"","AxleConfiguration":"","Axles":"","BasePrice":"","BatteryA":"","BatteryA_to":"","BatteryCells":"","BatteryInfo":"","BatteryKWh":"","BatteryKWh_to":"","BatteryModules":"","BatteryPacks":"","BatteryType":"","BatteryV":"","BatteryV_to":"","BedLengthIN":"","BedType":"","BlindSpotMon":"","BodyCabType":"","BodyClass":"Sport Utility Vehicle (SUV)\/Multi-Purpose Vehicle (MPV)","BrakeSystemDesc":"","BrakeSystemType":"",,"NCSAMake":"BMW","NCSAMapExcApprovedBy":"","NCSAMapExcApprovedOn":"","NCSAMappingException":"","NCSAModel":"X3","NCSANote":"","Note":"","OtherBusInfo":"","OtherEngineInfo":"","OtherMotorcycleInfo":"","OtherRestraintSystemInfo":"Head Inflatable Restraint for Driver, Front Passenger, Rear Outboard Driver-side and Rear Outboard Passenger-side.  Knee Inflatable Restraint for Driver.  Pretensioners for Driver and Front Passenger.","OtherTrailerInfo":"","ParkAssist":"","PedestrianAutomaticEmergencyBraking":"","PlantCity":"MUNICH","PlantCompanyName":"","PlantCountry":"GERMANY","PlantState":"","PossibleValues":"","Pretensioner":"Yes","RearCrossTrafficAlert":"","RearVisibilitySystem":"","SAEAutomationLevel":"","SAEAutomationLevel_to":"","SeatBeltsAll":"Manual","SeatRows":"","Seats":"","SemiautomaticHeadlampBeamSwitching":"","Series":"X3","Series2":"","SteeringLocation":"","SuggestedVIN":"","TPMS":"Direct","TopSpeedMPH":"","TrackWidth":"","TractionControl":"","TrailerBodyType":"Not Applicable","TrailerLength":"","TrailerType":"Not Applicable","TransmissionSpeeds":"","TransmissionStyle":"","Trim":"xDrive35i","Trim2":"SAV","Turbo":"","VIN":"5UXWX7C5*BA","ValveTrainDesign":"","VehicleType":"MULTIPURPOSE PASSENGER VEHICLE (MPV)","WheelBaseLong":"","WheelBaseShort":"","WheelBaseType":"","WheelSizeFront":"","WheelSizeRear":"","Wheels":"","Windows":""}]}');
       
    });

//return  '{"Count":700,"Message":"Results returned successfully. NOTE: Any missing decoded values should be interpreted as NHTSA does not have data on the specific variable. Missing value should NOT be interpreted as an indication that a feature or technology is unavailable for a vehicle.","SearchCriteria":"VIN(s): 5UXWX7C5*BA","Results":[{"ABS":"","ActiveSafetySysNote":"","AdaptiveCruiseControl":"","AdaptiveDrivingBeam":"","AdaptiveHeadlights":"","AdditionalErrorText":"","AirBagLocCurtain":"","AirBagLocFront":"1st Row (Driver & Passenger)","AirBagLocKnee":"","AirBagLocSeatCushion":"","AirBagLocSide":"1st Row (Driver & Passenger)","AutoReverseSystem":"","AutomaticPedestrianAlertingSound":"","AxleConfiguration":"","Axles":"","BasePrice":"","BatteryA":"","BatteryA_to":"","BatteryCells":"","BatteryInfo":"","BatteryKWh":"","BatteryKWh_to":"","BatteryModules":"","BatteryPacks":"","BatteryType":"","BatteryV":"","BatteryV_to":"","BedLengthIN":"","BedType":"","BlindSpotMon":"","BodyCabType":"","BodyClass":"Sport Utility Vehicle (SUV)\/Multi-Purpose Vehicle (MPV)","BrakeSystemDesc":"","BrakeSystemType":"",,"NCSAMake":"BMW","NCSAMapExcApprovedBy":"","NCSAMapExcApprovedOn":"","NCSAMappingException":"","NCSAModel":"X3","NCSANote":"","Note":"","OtherBusInfo":"","OtherEngineInfo":"","OtherMotorcycleInfo":"","OtherRestraintSystemInfo":"Head Inflatable Restraint for Driver, Front Passenger, Rear Outboard Driver-side and Rear Outboard Passenger-side.  Knee Inflatable Restraint for Driver.  Pretensioners for Driver and Front Passenger.","OtherTrailerInfo":"","ParkAssist":"","PedestrianAutomaticEmergencyBraking":"","PlantCity":"MUNICH","PlantCompanyName":"","PlantCountry":"GERMANY","PlantState":"","PossibleValues":"","Pretensioner":"Yes","RearCrossTrafficAlert":"","RearVisibilitySystem":"","SAEAutomationLevel":"","SAEAutomationLevel_to":"","SeatBeltsAll":"Manual","SeatRows":"","Seats":"","SemiautomaticHeadlampBeamSwitching":"","Series":"X3","Series2":"","SteeringLocation":"","SuggestedVIN":"","TPMS":"Direct","TopSpeedMPH":"","TrackWidth":"","TractionControl":"","TrailerBodyType":"Not Applicable","TrailerLength":"","TrailerType":"Not Applicable","TransmissionSpeeds":"","TransmissionStyle":"","Trim":"xDrive35i","Trim2":"SAV","Turbo":"","VIN":"5UXWX7C5*BA","ValveTrainDesign":"","VehicleType":"MULTIPURPOSE PASSENGER VEHICLE (MPV)","WheelBaseLong":"","WheelBaseShort":"","WheelBaseType":"","WheelSizeFront":"","WheelSizeRear":"","Wheels":"","Windows":""}]}';    
}
     

}
