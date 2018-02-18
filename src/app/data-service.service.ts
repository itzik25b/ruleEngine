import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable()
export class DataServiceService {
  configUrl = 'assets/mock.json';
  toggleValues = false;
  mock = {
    'rulesProcessing': [
      {
        'comment': 'Json object describing processing of rules with a specific rule type id, rule sub type id, rule type name and rule time stamp.',
        'ruleTypeID': 30,
        'ruleSubTypeID': 0,
        'ruleTypeName': 'Business area',
        'executionTimeStamp': '2018-01-11 13:04:38.504',
        'evalutedAction': 'OTD',
        'evaluatedRules': [
          {

            'ruleName': 'IE1_BUS_CTI_SELECTION',
            'ruleAction': 'ITD',
            'ruleEvaluationResult': false,
            'ruleConditionsEvaluation':
              {
                'rawConditions': '(Msg tp = Pacs_008 AND Dbt MOP = SCT) OR (Msg tp = Pacs_004 AND Dbt MOP = BOOK)',
                'conditionDisplay': {
                  'leftOperand': {
                    'leftOperand': {
                      'leftOperand': 'A left operand',
                      'rightOperand': 'A right oreprand',
                      'operator': 'A operator',
                      'leftOperandValue': 'A value'
                    },
                    'rightOperand': {
                      'leftOperand': {
                        'leftOperand': 'B left operand',
                        'rightOperand': 'B right oreprand',
                        'operator': 'B operator',
                        'leftOperandValue': 'B value'
                      },
                      'rightOperand': {
                        'leftOperand': 'C left operand',
                        'rightOperand': 'C right oreprand',
                        'operator': 'C operator',
                        'leftOperandValue': 'C value'
                      },
                      'logicalOperator': 'OR'
                    },
                    'logicalOperator': 'AND'
                  },
                  'rightOperand': {
                    'leftOperand': {
                      'leftOperand': {
                        'leftOperand': 'D left operand',
                        'rightOperand': 'D right oreprand',
                        'operator': 'D operator',
                        'leftOperandValue': 'D value'
                      },
                      'rightOperand': {
                        'leftOperand': 'E left operand',
                        'rightOperand': 'E right oreprand',
                        'operator': 'E operator',
                        'leftOperandValue': 'E value'
                      },
                      'logicalOperator': 'AND'
                    },
                    'rightOperand': {
                      'leftOperand': {
                        'leftOperand': 'F left operand',
                        'rightOperand': 'F right oreprand',
                        'operator': 'F operator',
                        'leftOperandValue': 'F value'
                      },
                      'rightOperand': {
                        'leftOperand': 'G left operand',
                        'rightOperand': 'G right oreprand',
                        'operator': 'G operator',
                        'leftOperandValue': 'G value'
                      },
                      'logicalOperator': 'AND'
                    },
                    'logicalOperator': 'OR'
                  },
                  'logicalOperator': 'OR'
                },
                'conditionResult': false
              }
          },
          {

            'ruleName': 'IE1_BUS_CTO_SELECTION',
            'ruleAction': 'OTD',
            'ruleEvaluationResult': true,
            'ruleConditionsEvaluation':
              {
                'rawConditions': '1=1',
                'conditionDisplay': {
                  'leftOperand': '1',
                  'rightOperand': '1',
                  'operator': '=',
                  'leftOperandValue': ''
                },
                'conditionResult': true
              }

          }


        ]

      },
      {
        'comment': 'Json object describing processing of rules with a specific rule type id, rule sub type id, rule type name and rule time stamp.',
        'ruleTypeID': 3,
        'ruleSubTypeID': 0,
        'ruleTypeName': 'MOP Selection',
        'executionTimeStamp': '2018-01-11 13:04:38.504',
        'evalutedAction': 'EURO1, TARGET2',
        'evaluatedRules': [
          {

            'ruleName': 'CDTMOP_EURO1',
            'ruleAction': 'EURO1',
            'ruleEvaluationResult': true,
            'ruleConditionsEvaluation':
              {
                'rawConditions': 'STTLM CCY = EUR AND  CDTR ACCT ID IS NOT NULL ',
                'conditionDisplay': {
                  'type': 'complexCondition',
                  'leftOperand': {
                    'type': 'finalCondition',
                    'leftOperand': 'STTLM CCY',
                    'rightOperand': 'EUR',
                    'operator': '=',
                    'leftOperandValue': 'EUR'
                  },
                  'rightOperand': {
                    'type': 'finalCondition',
                    'leftOperand': 'CDTR ACCT ID',
                    'rightOperand': 'NULL',
                    'operator': 'IS NOT',
                    'leftOperandValue': '12345'
                  },
                  'Operator': 'AND'
                },
                'conditionResult': true
              }


          },
          {
            'ruleName': 'CDTMOP_TARGET2',
            'ruleAction': 'TARGET2',
            'ruleEvaluationResult': true,
            'ruleConditionsEvaluation':
              {

                'rawConditions': 'STTLM CCY = EUR AND  CDTR ACCT ID IS NOT NULL ',
                'conditionDisplay': {
                  'type': 'complexCondition',
                  'leftOperand': {
                    'type': 'finalCondition',
                    'leftOperand': 'STTLM CCY',
                    'rightOperand': 'EUR',
                    'operator': '=',
                    'leftOperandValue': 'EUR'
                  },
                  'rightOperand': {
                    'type': 'finalCondition',
                    'leftOperand': 'CDTR ACCT ID',
                    'rightOperand': 'NULL',
                    'operator': 'IS NOT',
                    'leftOperandValue': '12345'
                  },
                  'Operator': 'AND'
                },
                'conditionResult': true
              }

          }
        ]

      }

    ]

  };
  constructor(private http: HttpClient) {}

  getData(mid) {
    // return this.mock;
    const params = new HttpParams().set('mid', mid);
    return this.http.get(this.configUrl, {params: params});
  }

  toggleValue() {
    this.toggleValues = !this.toggleValues;
  }


}
