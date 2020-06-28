import React from 'react';
import { mount } from 'enzyme';
import { expect } from "chai";
import IndexPage from '../../src/pages/IndexPage';

describe("IndexPage Component Testing", () => {

    let wrapper;

    beforeEach(() => {
        wrapper = mount(<IndexPage />);
    });
    
    it("should return the text content label", () => {
        const TEXT_CONTENT_EXPECTED = 'GitHub Username:';
        const label = wrapper.find('label').getDOMNode();
        expect(label.textContent).to.equal(TEXT_CONTENT_EXPECTED);
    });

    it("should return the placeholder input", () => {
        const PLACE_HOLDER_EXPECTED = 'Type the github username';
        const input = wrapper.find('input#username').getDOMNode();
        expect(input.placeholder).to.equal(PLACE_HOLDER_EXPECTED);
    });
});
