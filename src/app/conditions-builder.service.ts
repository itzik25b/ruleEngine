import { Injectable } from '@angular/core';

@Injectable()
export class ConditionsBuilderService {
  maxBinaryTreeLevel;

  static operandsToConditions(targetNode, currentNode) {
    currentNode = currentNode || targetNode;
    targetNode.conditions = targetNode.conditions || [];

    if (currentNode.leftOperand != null) {
      targetNode.conditions.push(currentNode.leftOperand);
      delete currentNode.leftOperand;
    }

    if (currentNode.rightOperand != null) {
      targetNode.conditions.push(currentNode.rightOperand);
      delete currentNode.rightOperand;
    }
  }

  constructor() { }

  buildTreeFromBinaryTree(binaryTree) {
    const treeConditions = {
      logicalOperator: undefined,
      conditions: undefined,
      leftOperand: undefined,
      rightOperand: undefined,
      level: undefined,
    };

    if (binaryTree == null) {
      binaryTree = {};
    }
    binaryTree.level = 0;
    this.maxBinaryTreeLevel = 0;
    this.countBinaryTreeLevelsFunction(binaryTree, 0);
    treeConditions.logicalOperator = binaryTree.logicalOperator;
    treeConditions.conditions = [];
    treeConditions.leftOperand = binaryTree.leftOperand;
    treeConditions.rightOperand = binaryTree.rightOperand;
    treeConditions.level = 0;

    if (treeConditions.rightOperand == null) {
      // a single condition rule case
      ConditionsBuilderService.operandsToConditions(treeConditions, undefined);
    } else {
      this.buildTree(treeConditions);
    }
    this.removeLevelsFunction(treeConditions);
    return treeConditions;
  }

  buildTree(tree) {
    if (tree.logicalOperator != null && (tree.leftOperand || tree.rightOperand)) {
      ConditionsBuilderService.operandsToConditions(tree, undefined);
    }

    if (!tree.conditions) {
      return;
    }

    for (let i = 0; i < tree.conditions.length ;) {
      if (tree.conditions[i].logicalOperator != null && (tree.conditions[i].logicalOperator === tree.logicalOperator)) {
        const child = tree.conditions[i];
        ConditionsBuilderService.operandsToConditions(child, undefined);
        tree.conditions.splice.apply(tree.conditions, [i, 1].concat(child.conditions));
      } else {
        i++;
      }
    }

    for (let j = 0; j < tree.conditions.length; j++) {
      if (tree.conditions[j].logicalOperator != null) {
        this.buildTree(tree.conditions[j]);
      }
    }
  }

  countBinaryTreeLevelsFunction(conditions, groupLevel) {
    if (conditions != null && conditions.logicalOperator != null) {
      if (conditions.level == null) {
        conditions.level = groupLevel + 1;
        if (this.maxBinaryTreeLevel < conditions.level) {
          this.maxBinaryTreeLevel = conditions.level;
        }
      }
      this.countBinaryTreeLevelsFunction(conditions.leftOperand, conditions.level);
      this.countBinaryTreeLevelsFunction(conditions.rightOperand, conditions.level);
    }
  }

  removeLevelsFunction(array) {
    if (array.conditions != null) {
      for (let i = 0; i < array.conditions.length; i++) {
        if (array.conditions[i].logicalOperator != null && array.conditions[i].level != null && (array.conditions[i].level !== 0)) {
          delete array.conditions[i].level;
          this.removeLevelsFunction(array.conditions[i]);
        }
      }
    }
  }

}
