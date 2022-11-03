import pytest

from neetcode.arrays_and_hashing.contains_duplicate import solution1, solution2, solution3


@pytest.mark.parametrize(
    "test_input,expected",
    [
        ([1, 2, 3, 1], True),
        ([1, 2, 3, 4], False),
        ([1, 1, 1, 3, 3, 4, 3, 2, 4, 2], True),
    ],
)
def test_solution(test_input, expected):
    assert solution1(test_input) == expected
    assert solution2(test_input) == expected
    assert solution3(test_input) == expected
