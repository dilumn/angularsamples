/*
Factory implementation using 'dataAccessService' to provide data access to 'Emergency Contacts' controller
*/
(function (angular) {
    'use strict';

    var formdataService = function () {

        var jsonResponse2 = {
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
      "type": "text",
      "content": "Textcontent",
      "value": "65",
      "isAssesment": true,
      "isAssesmentCheck": true,
      "assesmentDate": "",
      "workflowSender": {
          "sectionID": "1",
          "questionID": "4",
          "logic": "Textcon",
          "category": "showHide"
      }
  },
  {
      "sectionID": "1",
      "questionID": "2",
      "questionName": "Section1 Question2",
      "type": "text",
      "content": "Dilum Content",
      "value": "55",
      "isAssesment": true,
      "isAssesmentCheck": true,
      "assesmentDate": "",
      "workflowSender": {
          "sectionID": "2",
          "questionID": "4",
          "logic": "con",
          "category": "sectionNavigation"
      }
  },
{
    "sectionID": "1",
    "questionID": "3",
    "questionName": "Asking Question Here",
    "type": "text",
    "content": "text content here",
    "value": "65",
    "isAssesment": true,
    "isAssesmentCheck": true,
    "assesmentDate": ""
},
  {
      "sectionID": "1",
      "questionID": "4",
      "questionName": "What is your",
      "type": "text",
      "content": "Height??",
      "value": "55",
      "isAssesment": true,
      "isAssesmentCheck": true,
      "assesmentDate": "",
      "workflowReceiver": {
          "senderSectionID": "1",
          "senderQuestionID": "1",
          "category": "showHide",
          "show": false
      }
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
      "type": "radio",
      "content": [
                 {
                     "name": "Yes",
                     "isChecked": false
                 },
                 {
                     "name": "No",
                     "isChecked": true
                 },
                 {
                     "name": "Nothing",
                     "isChecked": false
                 },
                 {
                     "name": "Last One",
                     "isChecked": false
                 }

      ],
      "value": "65",
      "isAssesment": true,
      "isAssesmentCheck": true,
      "assesmentDate": ""
  },
  {
      "sectionID": "2",
      "questionID": "2",
      "questionName": "Checkbox here",
      "type": "checkbox",
      "content": false,
      "value": "55",
      "isAssesment": true,
      "isAssesmentCheck": true,
      "assesmentDate": ""
  },
  {
      "sectionID": "2",
      "questionID": "3",
      "questionName": "Body weight",
      "type": "text",
      "content": "textbox content",
      "value": "55",
      "isAssesment": true,
      "isAssesmentCheck": true,
      "assesmentDate": "",
      "workflowSender": {
          "sectionID": "2",
          "questionID": "4",
          "logic": "show"
      }
  }
  ,
  {
      "sectionID": "2",
      "questionID": "4",
      "questionName": "Marks",
      "type": "text",
      "content": "324",
      "value": "55",
      "isAssesment": true,
      "isAssesmentCheck": true,
      "assesmentDate": "",
      "workflowReceiver": {
          "senderSectionID": "2",
          "senderQuestionID": "3",
          "logic": "showHide",
          "show": false
      }
  },
  {
      "sectionID": "2",
      "questionID": "5",
      "questionName": "Mothers name",
      "type": "text",
      "content": "",
      "value": "55",
      "isAssesment": true,
      "isAssesmentCheck": true,
      "assesmentDate": ""
  },
  {
      "sectionID": "2",
      "questionID": "6",
      "questionName": "Fathers name",
      "type": "text",
      "content": "",
      "value": "55",
      "isAssesment": true,
      "isAssesmentCheck": true,
      "assesmentDate": ""
  },
  {
      "sectionID": "2",
      "questionID": "7",
      "questionName": "Brother Name",
      "type": "text",
      "content": "",
      "value": "55",
      "isAssesment": true,
      "isAssesmentCheck": true,
      "assesmentDate": ""
  },
  {
      "sectionID": "2",
      "questionID": "8",
      "questionName": "Sister Name",
      "type": "text",
      "content": "",
      "value": "55",
      "isAssesment": true,
      "isAssesmentCheck": true,
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
      "type": "textarea",
      "content": "Textarea content here",
      "value": "65",
      "isAssesment": true,
      "isAssesmentCheck": true,
      "assesmentDate": ""
  },
  {
      "sectionID": "3",
      "questionID": "2",
      "questionName": "Section3 Question2",
      "type": "text",
      "content": "Dilum Content",
      "value": "55",
      "isAssesment": true,
      "isAssesmentCheck": true,
      "assesmentDate": ""
  },
  {
      "sectionID": "3",
      "questionID": "3",
      "questionName": "Question3 content",
      "type": "text",
      "content": "Content",
      "value": "55",
      "isAssesment": true,
      "isAssesmentCheck": true,
      "assesmentDate": ""
  },
  {
      "sectionID": "3",
      "questionID": "4",
      "questionName": "Why are you leaving?",
      "type": "text",
      "content": "",
      "value": "55",
      "isAssesment": true,
      "isAssesmentCheck": true,
      "assesmentDate": ""
  },
  {
      "sectionID": "3",
      "questionID": "5",
      "questionName": "Reason??",
      "type": "text",
      "content": "",
      "value": "55",
      "isAssesment": true,
      "isAssesmentCheck": true,
      "assesmentDate": ""
  },
  {
      "sectionID": "3",
      "questionID": "6",
      "questionName": "Home Town",
      "type": "text",
      "content": "",
      "value": "55",
      "isAssesment": true,
      "isAssesmentCheck": true,
      "assesmentDate": ""
  },
  {
      "sectionID": "3",
      "questionID": "7",
      "questionName": "Mobile Number",
      "type": "text",
      "content": "",
      "value": "55",
      "isAssesment": true,
      "isAssesmentCheck": true,
      "assesmentDate": ""
  },
  {
      "sectionID": "3",
      "questionID": "8",
      "questionName": "Land Number",
      "type": "text",
      "content": "",
      "value": "55",
      "isAssesment": true,
      "isAssesmentCheck": true,
      "assesmentDate": ""
  },
  {
      "sectionID": "3",
      "questionID": "9",
      "questionName": "Address",
      "type": "text",
      "content": "",
      "value": "55",
      "isAssesment": true,
      "isAssesmentCheck": true,
      "assesmentDate": ""
  },
  {
      "sectionID": "3",
      "questionID": "10",
      "questionName": "Home Address",
      "type": "text",
      "content": "",
      "value": "55",
      "isAssesment": true,
      "isAssesmentCheck": true,
      "assesmentDate": ""
  },
  {
      "sectionID": "3",
      "questionID": "11",
      "questionName": "Fax",
      "type": "text",
      "content": "",
      "value": "55",
      "isAssesment": true,
      "isAssesmentCheck": true,
      "assesmentDate": ""
  }

]
}
            ]
        };

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
    "type": "text",
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
      "type": "text",
      "isAssesment": true
  }
  ,
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
      "assesmentDate": "",
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
      "questionName": "Section1 Question2",
      "content": "Dilum Content",
      "value": "55",
      "isAssesmentCheck": false,
      "assesmentDate": "",
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
    "questionID": "3",
    "questionName": "Asking Question Here",
    "content": "text content here",
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
      "assesmentDate": "",
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
                     "isChecked": true
                 },
                 {
                     "name": "Nothing",
                     "isChecked": false
                 },
                 {
                     "name": "Last One",
                     "isChecked": false
                 }

      ],
      "value": "65",
      "isAssesmentCheck": false,
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
      "content": "textbox content",
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



        var getResponseData = function () {
            return jsonResponse2;
        };

        var getLayoutData = function () {
            return layoutRespnse;
        };

        var getSectionData = function () {
            return dataResponse;
        };


        var service = {
            getResponseData: getResponseData,
            getLayoutData: getLayoutData,
            getSectionData: getSectionData

        };
        return service;

    };



    formdataService.$inject = [];

    angular
       .module('client.forms')
       .factory('formdataService', formdataService);

})(angular);