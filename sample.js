/*
Factory implementation using 'dataAccessService' to provide data access to 'Emergency Contacts' controller
*/
(function (angular) {
    'use strict';

    var formdataService = function () {

        //////////////////////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////Layout Json///////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////////

        var layoutRespnse = {
            "formID": "1",
            "sections": [
{
    "sectionID": "1",
    "questions":
[
  {
      "questionID": "1",
      "type": "text",
      "isAssesment": true
  },
  {
      "questionID": "2",
      "type": "text",
      "isAssesment": true
  },
{
    "questionID": "3",
    "type": "image",
    "isAssesment": true
},
  {
      "questionID": "4",
      "type": "text",
      "isAssesment": true
  }]
},
{
    "sectionID": "2",
    "questions":
[
  {
      "questionID": "1",
      "type": "radio",
      "isAssesment": true
  },
  {
      "questionID": "2",
      "type": "checkbox",
      "isAssesment": true
  }
  ,
  {
      "questionID": "3",
      "type": "select",
      "isAssesment": true
  }
  ,
  {
      "questionID": "4",
      "type": "signature",
      "isAssesment": true
  },
  {
      "questionID": "5",
      "type": "text",
      "isAssesment": true
  },
  {
      "questionID": "6",
      "type": "text",
      "isAssesment": true
  },
  {
      "questionID": "7",
      "type": "text",
      "isAssesment": true
  },
  {
      "questionID": "8",
      "type": "text",
      "isAssesment": true
  }
]
},
{
    "sectionID": "3",
    "questions":
[
  {
      "questionID": "1",
      "type": "textarea",
      "isAssesment": true
  },
  {
      "questionID": "2",
      "type": "text",
      "isAssesment": true
  },
  {
      "questionID": "3",
      "type": "text",
      "isAssesment": true
  },
  {
      "questionID": "4",
      "type": "text",
      "isAssesment": true
  },
  {
      "questionID": "5",
      "type": "text",
      "isAssesment": true
  },
  {
      "questionID": "6",
      "type": "text",
      "isAssesment": true
  },
  {
      "questionID": "7",
      "type": "text",
      "isAssesment": true
  },
  {
      "questionID": "8",
      "type": "text",
      "isAssesment": true
  },
  {
      "questionID": "9",
      "type": "text",
      "isAssesment": true
  },
  {
      "questionID": "10",
      "type": "text",
      "isAssesment": true
  },
  {
      "questionID": "11",
      "type": "text",
      "isAssesment": true
  }

]
}
            ]
        };


        //////////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////Data Json///////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////////

        var dataResponse = {
            "formID": "1",
            "formName": "Form1",
            "sections": [
{
    "sectionID": "1",
    "sectionName": "Section 1",
    "questions":
[
  {
      "sectionID": "1",
      "questionID": "1",
      "questionName": "Section1 Question1",
      "content": "Textarea content here",
      "value": "65",
      "isAssesmentCheck": true,
      "assesmentDate": ""
  },
  {
      "sectionID": "1",
      "questionID": "2",
      "questionName": "Section1 Question2",
      "content": "Dilum Content",
      "value": "55",
      "isAssesmentCheck": false,
      "assesmentDate": ""
  },
{
    "sectionID": "1",
    "questionID": "3",
    "questionName": "Showing Image Here",
    "content": "http://www.bestmotherofthegroomspeeches.com/wp-content/themes/thesis/rotator/sample-1.jpg",
    "value": "65",
    "isAssesmentCheck": false,
    "assesmentDate": ""
},
  {
      "sectionID": "1",
      "questionID": "4",
      "questionName": "What is your height",
      "content": "Height??",
      "value": "55",
      "isAssesmentCheck": false,
      "assesmentDate": ""
  }]
},
{
    "sectionID": "2",
    "sectionName": "Section 2",
    "questions":
[
  {
      "sectionID": "2",
      "questionID": "1",
      "questionName": "Please select one",
      "content": [
                 {
                     "name": "Yes",
                     "isChecked": false
                 },
                 {
                     "name": "No",
                     "isChecked": false
                 },
                 {
                     "name": "Nothing",
                     "isChecked": true
                 },
                 {
                     "name": "Last One",
                     "isChecked": false
                 }

      ],
      "value": "65",
      "isAssesmentCheck": true,
      "assesmentDate": ""
  },
  {
      "sectionID": "2",
      "questionID": "2",
      "questionName": "Checkbox here",
      "content": true,
      "value": "55",
      "isAssesmentCheck": false,
      "assesmentDate": ""
  }
  ,
  {
      "sectionID": "2",
      "questionID": "3",
      "questionName": "Body weight",
      "content": [
          {
              "id": "Option 111 to Select",
              "text": "Option 111 to Select"
          },
          {
              "id": "Option 2 to Select",
              "text": "Option 2 to Select"
          },
          {
              "id": "Option 3 to Select",
              "text": "Option 3 to Select"
          },
          {
              "id": "Option 4 to Select",
              "text": "Option 4 to Select"
          },
          {
              "id": "Option 5 to Select",
              "text": "Option 5 to Select"
          }
      ],
      "value": "55",
      "isAssesmentCheck": true,
      "assesmentDate": ""
  }
  ,
  {
      "sectionID": "2",
      "questionID": "4",
      "questionName": "Marks",
      "content": "324",
      "value": "55",
      "isAssesmentCheck": false,
      "assesmentDate": ""
  },
  {
      "sectionID": "2",
      "questionID": "5",
      "questionName": "Mothers name",
      "content": "",
      "value": "55",
      "isAssesmentCheck": true,
      "assesmentDate": ""
  },
  {
      "sectionID": "2",
      "questionID": "6",
      "questionName": "Fathers name",
      "content": "",
      "value": "55",
      "isAssesmentCheck": false,
      "assesmentDate": ""
  },
  {
      "sectionID": "2",
      "questionID": "7",
      "questionName": "Brother Name",
      "content": "",
      "value": "55",
      "isAssesmentCheck": false,
      "assesmentDate": ""
  },
  {
      "sectionID": "2",
      "questionID": "8",
      "questionName": "Sister Name",
      "content": "",
      "value": "55",
      "isAssesmentCheck": false,
      "assesmentDate": ""
  }
]
},
{
    "sectionID": "3",
    "sectionName": "Section 3",
    "questions":
[
  {
      "sectionID": "3",
      "questionID": "1",
      "questionName": "Section3 Question1",
      "content": "Textarea content here",
      "value": "65",
      "isAssesmentCheck": false,
      "assesmentDate": ""
  },
  {
      "sectionID": "3",
      "questionID": "2",
      "questionName": "Section3 Question2",
      "content": "Dilum Content",
      "value": "55",
      "isAssesmentCheck": true,
      "assesmentDate": ""
  },
  {
      "sectionID": "3",
      "questionID": "3",
      "questionName": "Question3 content",
      "content": "Content",
      "value": "55",
      "isAssesmentCheck": false,
      "assesmentDate": ""
  },
  {
      "sectionID": "3",
      "questionID": "4",
      "questionName": "Why are you leaving?",
      "content": "",
      "value": "55",
      "isAssesmentCheck": false,
      "assesmentDate": ""
  },
  {
      "sectionID": "3",
      "questionID": "5",
      "questionName": "Reason??",
      "content": "",
      "value": "55",
      "isAssesmentCheck": false,
      "assesmentDate": ""
  },
  {
      "sectionID": "3",
      "questionID": "6",
      "questionName": "Home Town",
      "content": "",
      "value": "55",
      "isAssesmentCheck": false,
      "assesmentDate": ""
  },
  {
      "sectionID": "3",
      "questionID": "7",
      "questionName": "Mobile Number",
      "content": "",
      "value": "55",
      "isAssesmentCheck": false,
      "assesmentDate": ""
  },
  {
      "sectionID": "3",
      "questionID": "8",
      "questionName": "Land Number",
      "content": "",
      "value": "55",
      "isAssesmentCheck": false,
      "assesmentDate": ""
  },
  {
      "sectionID": "3",
      "questionID": "9",
      "questionName": "Address",
      "content": "",
      "value": "55",
      "isAssesmentCheck": false,
      "assesmentDate": ""
  },
  {
      "sectionID": "3",
      "questionID": "10",
      "questionName": "Home Address",
      "content": "",
      "value": "55",
      "isAssesmentCheck": false,
      "assesmentDate": ""
  },
  {
      "sectionID": "3",
      "questionID": "11",
      "questionName": "Fax",
      "content": "",
      "value": "55",
      "isAssesmentCheck": false,
      "assesmentDate": ""
  }

]
}
            ]
        };

        //////////////////////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////Workflow Json/////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////////

        var workflowResponse = {
            "formID": "1",
            "sections": [
{
    "sectionID": "1",
    "questions":
[
  {
      "sectionID": "1",
      "questionID": "1",
      "workflow": {
          "category": "showHide",
          "workflowSender": {
              "sectionID": "1",
              "questionID": "4",
              "logic": "Textcon"
          }
      }
  },
  {
      "sectionID": "1",
      "questionID": "2",
      "workflow": {
          "category": "sectionNavigation",
          "sectionID": "2",
          "workflowSender": {
              "sectionID": "1",
              "questionID": "2",
              "logic": "test"
          },
          "workflowReceiver": {
              "senderSectionID": "1",
              "senderQuestionID": "2",
              "show": false
          }
      }
  },
{
    "sectionID": "1",
    "questionID": "3"
},
  {
      "sectionID": "1",
      "questionID": "4",
      "workflow": {
          "category": "showHide",
          "workflowReceiver": {
              "senderSectionID": "1",
              "senderQuestionID": "1",
              "show": false
          }
      }
  }]
},
{
    "sectionID": "2",
    "questions":
[
  {
      "sectionID": "2",
      "questionID": "1"
  },
  {
      "sectionID": "2",
      "questionID": "2"
  }
  ,
  {
      "sectionID": "2",
      "questionID": "3"
  }
  ,
  {
      "sectionID": "2",
      "questionID": "4"
  },
  {
      "sectionID": "2",
      "questionID": "5"
  },
  {
      "sectionID": "2",
      "questionID": "6"
  },
  {
      "sectionID": "2",
      "questionID": "7"
  },
  {
      "sectionID": "2",
      "questionID": "8"
  }
]
},
{
    "sectionID": "3",
    "questions":
[
  {
      "sectionID": "3",
      "questionID": "1"
  },
  {
      "sectionID": "3",
      "questionID": "2"
  },
  {
      "sectionID": "3",
      "questionID": "3"
  },
  {
      "sectionID": "3",
      "questionID": "4"
  },
  {
      "sectionID": "3",
      "questionID": "5"
  },
  {
      "sectionID": "3",
      "questionID": "6"
  },
  {
      "sectionID": "3",
      "questionID": "7"
  },
  {
      "sectionID": "3",
      "questionID": "8"
  },
  {
      "sectionID": "3",
      "questionID": "9"
  },
  {
      "sectionID": "3",
      "questionID": "10"
  },
  {
      "sectionID": "3",
      "questionID": "11"
  }
]
}
            ]
        };

        var getLayoutData = function () {
            return layoutRespnse;
        };

        var getSectionData = function () {
            return dataResponse;
        };

        var getWorkflowData = function () {
            return workflowResponse;
        };


        var service = {
            getLayoutData: getLayoutData,
            getSectionData: getSectionData,
            getWorkflowData: getWorkflowData
        };
        return service;

    };



    formdataService.$inject = [];

    angular
       .module('client.forms')
       .factory('formdataService', formdataService);

})(angular);