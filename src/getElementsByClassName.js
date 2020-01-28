var getElementsByClassName = function(className) {
  let targetClasses = className.split(" ");
  let result = getMatchingNodes(document, targetClasses);
  return result;
};

function getMatchingNodes(node, targetClasses) {
  let result = [];

  node.childNodes.forEach(child => {
    if (nodeMatchesTarget(child, targetClasses))
    {
      result.push(child);
    }

    let subResults = getMatchingNodes(child, targetClasses);
    result.push(...subResults);
  });

  return result;
}

function nodeMatchesTarget(node, targetClasses) {
  let result = false;

  if (node.classList === undefined) {
    return result;
  }

  targetClasses.forEach(targetClass => {
    if (result) {
      return;
    }

    node.classList.forEach(nodeClass => {
      if (nodeClass === targetClass) {
        result = true;
        return;
      }
    });
  });

  return result;
}