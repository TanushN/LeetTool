import React, { useState } from "react";
import { Button, Dropdown, Grid } from "semantic-ui-react";

const Home = () => {
  const options = [
    { key: "array", text: "array", value: "array" },
    { key: "backtracking", text: "backtracking", value: "backtracking" },
    {
      key: "binary-indexed-tree",
      text: "binary-indexed-tree",
      value: "binary-indexed-tree",
    },
    { key: "binary-search", text: "binary-search", value: "binary-search" },
    {
      key: "binary-search-tree",
      text: "binary-search-tree",
      value: "binary-search-tree",
    },
    {
      key: "bit-manipulation",
      text: "bit-manipulation",
      value: "bit-manipulation",
    },
    { key: "brainteaser", text: "brainteaser", value: "brainteaser" },
    {
      key: "breadth-first-search",
      text: "breadth-first-search",
      value: "breadth-first-search",
    },
    {
      key: "depth-first-search",
      text: "depth-first-search",
      value: "depth-first-search",
    },
    { key: "dequeue", text: "dequeue", value: "dequeue" },
    { key: "design", text: "design", value: "design" },
    {
      key: "divide-and-conquer",
      text: "divide-and-conquer",
      value: "divide-and-conquer",
    },
    {
      key: "dynamic-programming",
      text: "dynamic-programming",
      value: "dynamic-programming",
    },
    { key: "geometry", text: "geometry", value: "geometry" },
    { key: "graph", text: "graph", value: "graph" },
    { key: "greedy", text: "greedy", value: "greedy" },
    { key: "hash-table", text: "hash-table", value: "hash-table" },
    { key: "heap", text: "heap", value: "heap" },
    { key: "line-sweep", text: "line-sweep", value: "line-sweep" },
    { key: "linked-list", text: "linked-list", value: "linked-list" },
    { key: "math", text: "math", value: "math" },
    { key: "memoization", text: "memoization", value: "memoization" },
    { key: "minimax", text: "minimax", value: "minimax" },
    { key: "oop", text: "oop", value: "oop" },
    { key: "ordered-map", text: "ordered-map", value: "ordered-map" },
    { key: "queue", text: "queue", value: "queue" },
    { key: "random", text: "random", value: "random" },
    { key: "recursion", text: "recursion", value: "recursion" },
    {
      key: "rejection-sampling",
      text: "rejection-sampling",
      value: "rejection-sampling",
    },
    {
      key: "reservoir-sampling",
      text: "reservoir-sampling",
      value: "reservoir-sampling",
    },
    { key: "rolling-hash", text: "rolling-hash", value: "rolling-hash" },
    { key: "segment-tree", text: "segment-tree", value: "segment-tree" },
    { key: "sliding-window", text: "sliding-window", value: "sliding-window" },
    { key: "sort", text: "sort", value: "sort" },
    { key: "stack", text: "stack", value: "stack" },
    { key: "string", text: "string", value: "string" },
    { key: "suffix-array", text: "suffix-array", value: "suffix-array" },
    {
      key: "topological-sort",
      text: "topological-sort",
      value: "topological-sort",
    },
    { key: "tree", text: "tree", value: "tree" },
    { key: "trie", text: "trie", value: "trie" },
    { key: "two-pointers", text: "two-pointers", value: "two-pointers" },
    { key: "union-find", text: "union-find", value: "union-find" },
  ];

  const completeTags = [
    "linked-list",
    "hash-table",
    "math",
    "two-pointers",
    "string",
    "binary-search",
    "divide-and-conquer",
    "dynamic-programming",
    "backtracking",
    "stack",
    "heap",
    "greedy",
    "sort",
    "bit-manipulation",
    "tree",
    "depth-first-search",
    "breadth-first-search",
    "union-find",
    "graph",
    "design",
    "topological-sort",
    "trie",
    "binary-indexed-tree",
    "segment-tree",
    "binary-search-tree",
    "recursion",
    "brainteaser",
    "memoization",
    "queue",
    "minimax",
    "reservoir-sampling",
    "ordered-map",
    "geometry",
    "random",
    "rejection-sampling",
    "sliding-window",
    "line-sweep",
    "rolling-hash",
    "dequeue",
    "suffix-array",
    "oop",
    "array",
  ];

  const [tags, setTags] = useState([]);

  const selectionOnChange = (e, data) => {
    setTags(data.value);
  };

  const [url, setUrl] = useState("");

  const handleButtonChange = () => {
    var base_url = "https://leetcode.com/problemset/all/?topicSlugs=";

    var sep = "%2C";

    for (var i = 0; i < completeTags.length; i++) {
      if (tags.includes(completeTags[i])) {
        continue;
      } else {
        base_url += completeTags[i] + sep;
      }
    }

    console.log(base_url);
    window.open(base_url, "_blank");
    setUrl(base_url);
  };

  return (
    <div>
      <Grid
        centered
        style={{
          paddingTop: "50px",
        }}
      >
        <h1>LeetTool</h1>
        <Dropdown
          style={{
            paddingTop: "10px",
          }}
          placeholder="Category"
          fluid
          selection
          multiple
          search
          options={options}
          onChange={selectionOnChange}
        />
        <div
          style={{
            paddingTop: "10px",
          }}
        >
          <Button onClick={handleButtonChange}>Get</Button>
        </div>
      </Grid>
    </div>
  );
};

export default Home;
