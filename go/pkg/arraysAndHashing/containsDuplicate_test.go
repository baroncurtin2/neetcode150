package arraysAndHashing

import "testing"

type solutionTest struct {
	arg1     []int
	expected bool
}

var solutionTests = []solutionTest{
	{[]int{1, 2, 3, 1}, true},
	{[]int{1, 2, 3, 4}, false},
	{[]int{1, 1, 1, 3, 3, 4, 3, 2, 4, 2}, true},
}

func TestSolution1(t *testing.T) {
	for _, test := range solutionTests {
		if output := Solution1(test.arg1); output != test.expected {
			t.Errorf("Output %t not equal to expected %t", output, test.expected)
		}
	}
}

func TestSolution2(t *testing.T) {
	for _, test := range solutionTests {
		if output := Solution2(test.arg1); output != test.expected {
			t.Errorf("Output %t not equal to expected %t", output, test.expected)
		}
	}
}

func TestSolution3(t *testing.T) {
	for _, test := range solutionTests {
		if output := Solution3(test.arg1); output != test.expected {
			t.Errorf("Output %t not equal to expected %t", output, test.expected)
		}
	}
}
