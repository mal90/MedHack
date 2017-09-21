package com.medhack.MedHack;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by SunimalM on 9/19/2017.
 */

@RestController
public class IndexController {
    @RequestMapping("/hello")
    public String index(){
        return "createPatientPrescription.html";
    }
}
