describe('getPatientDetail API', () => {
    it('should return patient details for a valid patient ID', () => {
      // Make a request to the API endpoint
      cy.request({
        method: 'POST',
        url: 'https://api.midasehealth.com/ward/getPatientDetail',
        headers: {
          'Content-Type': 'application/json'
        },
        body: {
          patientId: 'valid-patient-id'
        }
      }).then((response) => {
        // Verify the response status code is 200
        expect(response.status).to.eq(200);
  
        // Verify the response body contains the expected patient details
        expect(response.body).to.have.property('name', 'John Doe');
        expect(response.body).to.have.property('age', 35);
        expect(response.body).to.have.property('gender', 'male');
      });
    });
  
    it('should return an error for an invalid patient ID', () => {
      // Make a request to the API endpoint with an invalid patient ID
      cy.request({
        method: 'POST',
        url: 'https://api.midasehealth.com/ward/getPatientDetail',
        headers: {
          'Content-Type': 'application/json'
        },
        body: {
          patientId: 'invalid-patient-id'
        }
      }).then((response) => {
        // Verify the response status code is 400
        expect(response.status).to.eq(400);
  
        // Verify the response body contains the expected error message
        expect(response.body).to.have.property('error', 'Invalid patient ID');
      });
    });
  });
  