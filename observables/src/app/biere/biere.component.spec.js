"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var biere_component_1 = require("./biere.component");
describe('BiereComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [biere_component_1.BiereComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(biere_component_1.BiereComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
