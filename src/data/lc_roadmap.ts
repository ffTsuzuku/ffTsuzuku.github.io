export type ProblemTag =
  | "Array"
  | "Hashmap"
  | "Sorting"
  | "Merge Sort"
  | "Heap"
  | "Bucket Sort"
  | "Divide and Conquer"
  | "Radix Sort"
  | "Counting Sort"
  | "String"
  | "Quick Select"
  | "Trie"
  | "Backtracking"
  | "Binary Search"
  | "Design"
  | "Bit Manipulation"
  | "Palindrome"
  | "Matrix"
  | "Heap"
  | "Greedy"
  | "Priority Queue"
  | "Linked List"
  | "Prefix Sum"
  | "Union Find"
  | "Two Pointers"
  | "Math"

export type Problem = {
  name: string;
  url: string;
  solution?: string;
  completed_at?: string;
  tag?: ProblemTag[];
  difficulty?: "Easy" | "Medium" | "Hard";
};

export type Roadmap = Record<
  string,
  { "problems": Problem[]; "section": string }
>;

const roadmap: Roadmap = {
  "Step 1: Arrays & Hashing": {
    "section": "Array&Hashing",
    "problems": [
      {
        "name": "Two Sum",
        "url": "https://leetcode.com/problems/two-sum/",
        "difficulty": "Easy",
        "tag": ["Array", "Hashmap"],
        "solution":
          "https://community.inkdrop.app/afd481985696bcb19895f8b79c06970b/HrKMnHl_C",
        "completed_at": "2025-03-23",
      },
      {
        "name": "Contains Duplicate",
        "url": "https://leetcode.com/problems/contains-duplicate/",
        "difficulty": "Easy",
        "tag": ["Array", "Hashmap", "Sorting"],
        "solution":
          "https://community.inkdrop.app/afd481985696bcb19895f8b79c06970b/xtNrWswT",
        "completed_at": "2025-03-23",
      },
      {
        "name": "Sorting Array",
        "url": "https://leetcode.com/problems/sort-an-array/description/",
        "difficulty": "Medium",
        "tag": [
          "Array",
          "Sorting",
          "Merge Sort",
          "Heap",
          "Bucket Sort",
          "Divide and Conquer",
          "Radix Sort",
          "Counting Sort",
        ],
        "completed_at": "2025-03-23",
      },
      {
        "name": "Valid Anagram",
        "url": "https://leetcode.com/problems/valid-anagram/",
        "solution":
          "https://community.inkdrop.app/afd481985696bcb19895f8b79c06970b/uSMu7WPi",
        "difficulty": "Easy",
        "tag": ["Hashmap", "Sorting", "Array", "String"],
        "completed_at": "2025-03-23",
      },
      {
        "name": "Group Anagrams",
        "url": "https://leetcode.com/problems/group-anagrams/",
        "solution":
          "https://community.inkdrop.app/afd481985696bcb19895f8b79c06970b/-_sszk6e",
        "difficulty": "Medium",
        "tag": ["Array", "Sorting", "Hashmap", "String"],
      },
      {
        "name": "Top K Frequent Elements",
        "url": "https://leetcode.com/problems/top-k-frequent-elements/",
        "solution":
          "https://community.inkdrop.app/afd481985696bcb19895f8b79c06970b/ECngN3Yg",
        "completed_at": "2025-03-24",
        "difficulty": "Medium",
        "tag": [
          "Array",
          "Hashmap",
          "Divide and Conquer",
          "Bucket Sort",
          "Counting Sort",
          "Quick Select",
          "Heap",
        ],
      },
      {
        "name": "Product of Array Except Self",
        "url": "https://leetcode.com/problems/product-of-array-except-self/",
        "completed_at": "2025-03-29",
        "solution":
          "https://community.inkdrop.app/afd481985696bcb19895f8b79c06970b/5g-Kk_Ntv",
        "tag": ["Array", "Prefix Sum"],
      },
      {
        "name": "Valid Sudoku",
        "url": "https://leetcode.com/problems/valid-sudoku/",
        "difficulty": "Medium",
        "completed_at": "2025-04-23",
        "solution":
          "https://community.inkdrop.app/afd481985696bcb19895f8b79c06970b/UJM4HKKx",
        "tag": ["Array", "Hashmap", "Matrix"],
      },
      {
        "name": "Encode and Decode Strings",
        "url": "https://leetcode.com/problems/encode-and-decode-strings/",
        "solution":
          "https://community.inkdrop.app/afd481985696bcb19895f8b79c06970b/iCKl6BNA",
        "difficulty": "Medium",
        "tag": ["Array", "String", "Design"],
        "completed_at": "2025-05-01",
      },
      {
        "name": "Longest Consecutive Sequence",
        "url": "https://leetcode.com/problems/longest-consecutive-sequence/",
		"solution": 'https://community.inkdrop.app/afd481985696bcb19895f8b79c06970b/XXVo4CSq',
		"difficulty": "Medium",
		"tag": ["Array", "Hashmap", "Union Find"],
		"completed_at": '2025-05-04',
      },
      {
        "name": "Intersection of Two Arrays",
        "url": "https://leetcode.com/problems/intersection-of-two-arrays/",
		"solution": "https://community.inkdrop.app/afd481985696bcb19895f8b79c06970b/luzIzXi-",
		"completed_at": "2025-07-01",
		"difficulty": "Easy",
		"tag": ["Array", "Hashmap", "Two Pointers", "Binary Search", "Sorting"],
      },
      {
        "name": "Intersection of Two Arrays II",
        "url": "https://leetcode.com/problems/intersection-of-two-arrays-ii/",
		"solution": "https://community.inkdrop.app/afd481985696bcb19895f8b79c06970b/ZXNtf6pj",
		"tag": ["Array", "Hashmap", "Two Pointers", "Binary Search", "Sorting"],
		"difficulty": "Easy",
		"completed_at": "2025-07-01",
      },
      {
        "name": "Missing Number",
        "url": "https://leetcode.com/problems/missing-number/",
		"solution": 'https://community.inkdrop.app/afd481985696bcb19895f8b79c06970b/ve1XQ7Bd',
		"difficulty": "Easy",
		"tag": ["Array", "Hashmap", "Math"],
		"completed_at": "2025-07-03",
      },
      {
        "name": "Find the Difference",
        "url": "https://leetcode.com/problems/find-the-difference/",
		"solution": "https://community.inkdrop.app/afd481985696bcb19895f8b79c06970b/0GUHxhlQ",
		"difficulty": "Easy",
		"tag": ["Array", "Hashmap", "String", "Sorting"],
		"completed_at": "2025-07-03",
      },
      {
        "name": "Happy Number",
        "url": "https://leetcode.com/problems/happy-number/",
		"solution": "https://community.inkdrop.app/afd481985696bcb19895f8b79c06970b/38KdcxwP",
		"difficulty": "Easy",
		"tag": ["Two Pointers", "Hashmap", "Math"],
		"completed_at": "2025-07-03",
      },
      { "name": "4Sum", "url": "https://leetcode.com/problems/4sum/" },
      {
        "name": "Palindrome Pairs (Premium)",
        "url": "https://leetcode.com/problems/palindrome-pairs/",
      },
      {
        "name":
          "Longest Substring with At Most K Distinct Characters (Premium)",
        "url":
          "https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/",
      },
      {
        "name": "Design HashMap (Premium)",
        "url": "https://leetcode.com/problems/design-hashmap/",
      },
    ],
  },
  "Step 2: Two Pointers": {
    "section": "Two Pointers",
    "problems": [
      {
        "name": "Valid Palindrome",
        "url": "https://leetcode.com/problems/valid-palindrome/",
      },
      {
        "name": "Two Sum II - Input Array Is Sorted",
        "url":
          "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
      },
      { "name": "3Sum", "url": "https://leetcode.com/problems/3sum/" },
      {
        "name": "Container With Most Water",
        "url": "https://leetcode.com/problems/container-with-most-water/",
      },
      {
        "name": "Trapping Rain Water",
        "url": "https://leetcode.com/problems/trapping-rain-water/",
      },
      {
        "name": "Move Zeroes",
        "url": "https://leetcode.com/problems/move-zeroes/",
      },
      {
        "name": "Sort Colors",
        "url": "https://leetcode.com/problems/sort-colors/",
      },
      {
        "name": "Remove Duplicates from Sorted Array",
        "url":
          "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
      },
      {
        "name": "Remove Duplicates from Sorted Array II",
        "url":
          "https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/",
      },
      {
        "name": "Remove Element",
        "url": "https://leetcode.com/problems/remove-element/",
      },
      {
        "name": "Squares of a Sorted Array",
        "url": "https://leetcode.com/problems/squares-of-a-sorted-array/",
      },
      {
        "name": "Partition Labels",
        "url": "https://leetcode.com/problems/partition-labels/",
      },
      {
        "name": "Subarray Product Less Than K (Premium)",
        "url": "https://leetcode.com/problems/subarray-product-less-than-k/",
      },
      {
        "name": "Shortest Subarray with Sum at Least K (Premium)",
        "url":
          "https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/",
      },
      {
        "name":
          "Maximum Number of Vowels in a Substring of Given Length (Premium)",
        "url":
          "https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/",
      },
    ],
  },
  "Step 3: Stacks": {
    "section": "Stacks",
    "problems": [
      {
        "name": "Valid Parentheses",
        "url": "https://leetcode.com/problems/valid-parentheses/",
      },
      {
        "name": "Min Stack",
        "url": "https://leetcode.com/problems/min-stack/",
      },
      {
        "name": "Evaluate Reverse Polish Notation",
        "url":
          "https://leetcode.com/problems/evaluate-reverse-polish-notation/",
      },
      {
        "name": "Generate Parentheses",
        "url": "https://leetcode.com/problems/generate-parentheses/",
      },
      {
        "name": "Daily Temperatures",
        "url": "https://leetcode.com/problems/daily-temperatures/",
      },
      {
        "name": "Car Fleet",
        "url": "https://leetcode.com/problems/car-fleet/",
      },
      {
        "name": "Largest Rectangle in Histogram",
        "url": "https://leetcode.com/problems/largest-rectangle-in-histogram/",
      },
      {
        "name": "Next Greater Element I",
        "url": "https://leetcode.com/problems/next-greater-element-i/",
      },
      {
        "name": "Next Greater Element II",
        "url": "https://leetcode.com/problems/next-greater-element-ii/",
      },
      {
        "name": "Asteroid Collision",
        "url": "https://leetcode.com/problems/asteroid-collision/",
      },
      {
        "name": "Remove K Digits (Premium)",
        "url": "https://leetcode.com/problems/remove-k-digits/",
      },
      {
        "name": "Minimum Remove to Make Valid Parentheses (Premium)",
        "url":
          "https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/",
      },
      {
        "name": "Maximum Frequency Stack (Premium)",
        "url": "https://leetcode.com/problems/maximum-frequency-stack/",
      },
    ],
  },
  "Step 4: Sliding Window": {
    "section": "Sliding Window",
    "problems": [
      {
        "name": "Best Time to Buy and Sell Stock",
        "url": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
      },
      {
        "name": "Longest Substring Without Repeating Characters",
        "url":
          "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
      },
      {
        "name": "Longest Repeating Character Replacement",
        "url":
          "https://leetcode.com/problems/longest-repeating-character-replacement/",
      },
      {
        "name": "Permutation in String",
        "url": "https://leetcode.com/problems/permutation-in-string/",
      },
      {
        "name": "Minimum Window Substring",
        "url": "https://leetcode.com/problems/minimum-window-substring/",
      },
      {
        "name": "Sliding Window Maximum",
        "url": "https://leetcode.com/problems/sliding-window-maximum/",
      },
      {
        "name": "Fruit Into Baskets",
        "url": "https://leetcode.com/problems/fruit-into-baskets/",
      },
      {
        "name": "Longest Subarray of 1’s After Deleting One Element",
        "url":
          "https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/",
      },
      {
        "name": "Binary Subarrays With Sum",
        "url": "https://leetcode.com/problems/binary-subarrays-with-sum/",
      },
      {
        "name": "Subarrays with K Different Integers",
        "url":
          "https://leetcode.com/problems/subarrays-with-k-different-integers/",
      },
      {
        "name": "Substring with Concatenation of All Words (Premium)",
        "url":
          "https://leetcode.com/problems/substring-with-concatenation-of-all-words/",
      },
      {
        "name":
          "Longest Substring with At Most Two Distinct Characters (Premium)",
        "url":
          "https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/",
      },
      {
        "name": "Replace the Substring for Balanced String (Premium)",
        "url":
          "https://leetcode.com/problems/replace-the-substring-for-balanced-string/",
      },
    ],
  },
  "Step 5: Binary Search": {
    "section": "Binary Search",
    "problems": [
      {
        "name": "Binary Search",
        "url": "https://leetcode.com/problems/binary-search/",
      },
      {
        "name": "Search a 2D Matrix",
        "url": "https://leetcode.com/problems/search-a-2d-matrix/",
      },
      {
        "name": "Find Minimum in Rotated Sorted Array",
        "url":
          "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
      },
      {
        "name": "Search in Rotated Sorted Array",
        "url": "https://leetcode.com/problems/search-in-rotated-sorted-array/",
      },
      {
        "name": "Koko Eating Bananas",
        "url": "https://leetcode.com/problems/koko-eating-bananas/",
      },
      {
        "name": "Median of Two Sorted Arrays",
        "url": "https://leetcode.com/problems/median-of-two-sorted-arrays/",
      },
      {
        "name": "Find Kth Smallest Pair Distance",
        "url":
          "https://leetcode.com/problems/find-k-th-smallest-pair-distance/",
      },
      {
        "name": "Capacity to Ship Packages Within D Days",
        "url":
          "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/",
      },
      {
        "name": "Split Array Largest Sum",
        "url": "https://leetcode.com/problems/split-array-largest-sum/",
      },
      {
        "name": "Minimize Max Distance to Gas Station (Premium)",
        "url":
          "https://leetcode.com/problems/minimize-max-distance-to-gas-station/",
      },
      {
        "name": "Maximum Number of Removable Characters (Premium)",
        "url":
          "https://leetcode.com/problems/maximum-number-of-removable-characters/",
      },
    ],
  },
  "Step 6: Linked List": {
    "section": "Linked List",
    "problems": [
      {
        "name": "Reverse Linked List",
        "url": "https://leetcode.com/problems/reverse-linked-list/",
      },
      {
        "name": "Merge Two Sorted Lists",
        "url": "https://leetcode.com/problems/merge-two-sorted-lists/",
      },
      {
        "name": "Linked List Cycle",
        "url": "https://leetcode.com/problems/linked-list-cycle/",
      },
      {
        "name": "Palindrome Linked List",
        "url": "https://leetcode.com/problems/palindrome-linked-list/",
      },
      {
        "name": "Intersection of Two Linked Lists",
        "url":
          "https://leetcode.com/problems/intersection-of-two-linked-lists/",
      },
      {
        "name": "Remove Nth Node From End of List",
        "url":
          "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
      },
      {
        "name": "Copy List with Random Pointer",
        "url": "https://leetcode.com/problems/copy-list-with-random-pointer/",
      },
      {
        "name": "Merge k Sorted Lists",
        "url": "https://leetcode.com/problems/merge-k-sorted-lists/",
      },
      {
        "name": "Add Two Numbers",
        "url": "https://leetcode.com/problems/add-two-numbers/",
      },
      {
        "name": "Flatten a Multilevel Doubly Linked List (Premium)",
        "url":
          "https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/",
      },
      {
        "name": "Linked List Components (Premium)",
        "url": "https://leetcode.com/problems/linked-list-components/",
      },
      {
        "name": "Split Linked List in Parts (Premium)",
        "url": "https://leetcode.com/problems/split-linked-list-in-parts/",
      },
    ],
  },
  "Step 7: Trees": {
    "section": "Trees",
    "problems": [
      {
        "name": "Maximum Depth of Binary Tree",
        "url": "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
      },
      {
        "name": "Symmetric Tree",
        "url": "https://leetcode.com/problems/symmetric-tree/",
      },
      {
        "name": "Binary Tree Inorder Traversal",
        "url": "https://leetcode.com/problems/binary-tree-inorder-traversal/",
      },
      {
        "name": "Binary Tree Level Order Traversal",
        "url":
          "https://leetcode.com/problems/binary-tree-level-order-traversal/",
      },
      {
        "name": "Convert Sorted Array to Binary Search Tree",
        "url":
          "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/",
      },
      {
        "name": "Validate Binary Search Tree",
        "url": "https://leetcode.com/problems/validate-binary-search-tree/",
      },
      {
        "name": "Binary Tree Maximum Path Sum",
        "url": "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
      },
      {
        "name": "Construct Binary Tree from Preorder and Inorder Traversal",
        "url":
          "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
      },
      {
        "name": "Unique Binary Search Trees",
        "url": "https://leetcode.com/problems/unique-binary-search-trees/",
      },
      {
        "name": "Binary Tree Zigzag Level Order Traversal",
        "url":
          "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/",
      },
      {
        "name": "Find Duplicate Subtrees (Premium)",
        "url": "https://leetcode.com/problems/find-duplicate-subtrees/",
      },
      {
        "name": "Binary Tree Cameras (Premium)",
        "url": "https://leetcode.com/problems/binary-tree-cameras/",
      },
      {
        "name": "Maximum Sum BST in Binary Tree (Premium)",
        "url": "https://leetcode.com/problems/maximum-sum-bst-in-binary-tree/",
      },
    ],
  },
  "Step 8: Tries": {
    "section": "Tries",
    "problems": [
      {
        "name": "Implement Trie (Prefix Tree)",
        "url": "https://leetcode.com/problems/implement-trie-prefix-tree/",
        "difficulty": "Medium",
        "tag": ["Trie"],
      },
      {
        "name": "Replace Words",
        "url": "https://leetcode.com/problems/replace-words/",
        "difficulty": "Medium",
        "tag": ["Trie"],
      },
      {
        "name": "Design Add and Search Words Data Structure",
        "url":
          "https://leetcode.com/problems/design-add-and-search-words-data-structure/",
        "difficulty": "Medium",
        "tag": ["Trie", "Design"],
      },
      {
        "name": "Longest Word in Dictionary",
        "url": "https://leetcode.com/problems/longest-word-in-dictionary/",
        "difficulty": "Medium",
        "tag": ["Trie", "Sorting"],
      },
      {
        "name": "Prefix and Suffix Search",
        "url": "https://leetcode.com/problems/prefix-and-suffix-search/",
        "difficulty": "Hard",
        "tag": ["Trie"],
      },
      {
        "name": "Maximum XOR of Two Numbers in an Array",
        "url":
          "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/",
        "difficulty": "Medium",
        "tag": ["Trie", "Bit Manipulation"],
      },
      {
        "name": "Palindrome Pairs",
        "url": "https://leetcode.com/problems/palindrome-pairs/",
        "difficulty": "Hard",
        "tag": ["Trie", "Palindrome"],
      },
      {
        "name": "Add and Search Word - Data structure design",
        "url":
          "https://leetcode.com/problems/add-and-search-word-data-structure-design/",
        "difficulty": "Medium",
        "tag": ["Trie", "Backtracking"],
      },
      {
        "name": "Stream of Characters",
        "url": "https://leetcode.com/problems/stream-of-characters/",
        "difficulty": "Hard",
        "tag": ["Trie"],
      },
      {
        "name": "Search Suggestions System",
        "url": "https://leetcode.com/problems/search-suggestions-system/",
        "difficulty": "Medium",
        "tag": ["Trie", "Binary Search"],
      },
    ],
  },
  "Step 9: Backtracking": {
    "section": "Backtracking",
    "problems": [
      {
        "name": "Word Search",
        "url": "https://leetcode.com/problems/word-search/",
        "difficulty": "Medium",
        "tag": ["Backtracking", "Matrix"],
      },
      {
        "name": "Letter Combinations of a Phone Number",
        "url":
          "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
        "difficulty": "Medium",
        "tag": ["Backtracking"],
      },
      {
        "name": "Permutations",
        "url": "https://leetcode.com/problems/permutations/",
        "difficulty": "Medium",
        "tag": ["Backtracking"],
      },
      {
        "name": "Combination Sum",
        "url": "https://leetcode.com/problems/combination-sum/",
        "difficulty": "Medium",
        "tag": ["Backtracking"],
      },
      {
        "name": "N-Queens",
        "url": "https://leetcode.com/problems/n-queens/",
        "difficulty": "Hard",
        "tag": ["Backtracking"],
      },
      {
        "name": "Sudoku Solver",
        "url": "https://leetcode.com/problems/sudoku-solver/",
        "difficulty": "Hard",
        "tag": ["Backtracking"],
      },
      {
        "name": "Generate Parentheses",
        "url": "https://leetcode.com/problems/generate-parentheses/",
        "difficulty": "Medium",
        "tag": ["Backtracking"],
      },
      {
        "name": "Subsets",
        "url": "https://leetcode.com/problems/subsets/",
        "difficulty": "Medium",
        "tag": ["Backtracking"],
      },
      {
        "name": "Restore IP Addresses",
        "url": "https://leetcode.com/problems/restore-ip-addresses/",
        "difficulty": "Medium",
        "tag": ["Backtracking", "String"],
      },
      {
        "name": "Combination Sum II",
        "url": "https://leetcode.com/problems/combination-sum-ii/",
        "difficulty": "Medium",
        "tag": ["Backtracking"],
      },
    ],
  },
  "Step 10: Heap/Priority Queue": {
    "section": "Heap",
    "problems": [
      {
        "name": "Kth Largest Element in an Array",
        "url": "https://leetcode.com/problems/kth-largest-element-in-an-array/",
        "difficulty": "Medium",
        "tag": ["Heap", "Priority Queue"],
      },
      {
        "name": "Top K Frequent Elements",
        "url": "https://leetcode.com/problems/top-k-frequent-elements/",
        "difficulty": "Medium",
        "tag": ["Heap", "Hashmap", "Priority Queue"],
      },
      {
        "name": "Merge k Sorted Lists",
        "url": "https://leetcode.com/problems/merge-k-sorted-lists/",
        "difficulty": "Hard",
        "tag": ["Heap", "Linked List", "Divide and Conquer", "Priority Queue"],
      },
      {
        "name": "Find Median from Data Stream",
        "url": "https://leetcode.com/problems/find-median-from-data-stream/",
        "difficulty": "Hard",
        "tag": ["Heap", "Design", "Priority Queue"],
      },
      {
        "name": "Last Stone Weight",
        "url": "https://leetcode.com/problems/last-stone-weight/",
        "difficulty": "Easy",
        "tag": ["Heap", "Simulation", "Priority Queue"],
      },
      {
        "name": "K Closest Points to Origin",
        "url": "https://leetcode.com/problems/k-closest-points-to-origin/",
        "difficulty": "Medium",
        "tag": ["Heap", "Sorting", "Priority Queue"],
      },
      {
        "name": "Task Scheduler",
        "url": "https://leetcode.com/problems/task-scheduler/",
        "difficulty": "Medium",
        "tag": ["Heap", "Greedy", "Priority Queue"],
      },
      {
        "name": "Reorganize String",
        "url": "https://leetcode.com/problems/reorganize-string/",
        "difficulty": "Medium",
        "tag": ["Heap", "Greedy", "Priority Queue"],
      },
      {
        "name": "Minimum Number of Refueling Stops",
        "url":
          "https://leetcode.com/problems/minimum-number-of-refueling-stops/",
        "difficulty": "Hard",
        "tag": ["Heap", "Greedy", "Priority Queue"],
      },
      {
        "name": "Sort Characters By Frequency",
        "url": "https://leetcode.com/problems/sort-characters-by-frequency/",
        "difficulty": "Medium",
        "tag": ["Heap", "Hashmap", "Priority Queue"],
      },
    ],
  },
  "Step 10: Graphs": {
    "section": "Graphs",
    "problems": [
      {
        "name": "Number of Islands",
        "url": "https://leetcode.com/problems/number-of-islands/",
      },
      {
        "name": "Course Schedule",
        "url": "https://leetcode.com/problems/course-schedule/",
      },
      {
        "name": "Graph Valid Tree",
        "url": "https://leetcode.com/problems/graph-valid-tree/",
      },
      {
        "name": "Word Ladder",
        "url": "https://leetcode.com/problems/word-ladder/",
      },
      {
        "name": "Clone Graph",
        "url": "https://leetcode.com/problems/clone-graph/",
      },
      {
        "name": "Critical Connections in a Network",
        "url":
          "https://leetcode.com/problems/critical-connections-in-a-network/",
      },
      {
        "name": "Pacific Atlantic Water Flow",
        "url": "https://leetcode.com/problems/pacific-atlantic-water-flow/",
      },
      {
        "name": "Longest Path in a Grid",
        "url": "https://leetcode.com/problems/longest-path-in-a-grid/",
      },
      {
        "name": "Swim in Rising Water",
        "url": "https://leetcode.com/problems/swim-in-rising-water/",
      },
      {
        "name": "Graph Valid Tree (Premium)",
        "url": "https://leetcode.com/problems/graph-valid-tree/",
      },
      {
        "name": "Critical Connections in a Network (Premium)",
        "url":
          "https://leetcode.com/problems/critical-connections-in-a-network/",
      },
      {
        "name": "Swim in Rising Water (Premium)",
        "url": "https://leetcode.com/problems/swim-in-rising-water/",
      },
    ],
  },
  "Step 10: Dynamic Programming": {
    "section": "Dynamic Programming",
    "problems": [
      {
        "name": "Climbing Stairs",
        "url": "https://leetcode.com/problems/climbing-stairs/",
      },
      {
        "name": "House Robber",
        "url": "https://leetcode.com/problems/house-robber/",
      },
      {
        "name": "Coin Change",
        "url": "https://leetcode.com/problems/coin-change/",
      },
      {
        "name": "Longest Increasing Subsequence",
        "url": "https://leetcode.com/problems/longest-increasing-subsequence/",
      },
      {
        "name": "Unique Paths",
        "url": "https://leetcode.com/problems/unique-paths/",
      },
      {
        "name": "Maximum Subarray",
        "url": "https://leetcode.com/problems/maximum-subarray/",
      },
      {
        "name": "Word Break",
        "url": "https://leetcode.com/problems/word-break/",
      },
      {
        "name": "Jump Game",
        "url": "https://leetcode.com/problems/jump-game/",
      },
      {
        "name": "Palindrome Partitioning",
        "url": "https://leetcode.com/problems/palindrome-partitioning/",
      },
      {
        "name": "Palindrome Partitioning II (Premium)",
        "url": "https://leetcode.com/problems/palindrome-partitioning-ii/",
      },
      {
        "name": "Russian Doll Envelopes (Premium)",
        "url": "https://leetcode.com/problems/russian-doll-envelopes/",
      },
      {
        "name": "Minimum Cost to Cut a Stick (Premium)",
        "url": "https://leetcode.com/problems/minimum-cost-to-cut-a-stick/",
      },
    ],
  },
};

export default roadmap;
