import unittest
from hello import hello


class TestHello(unittest.TestCase):
    def test_hello_returns_correct_string(self):
        self.assertEqual(hello(), "Hello, World!")

    def test_hello_returns_string_type(self):
        self.assertIsInstance(hello(), str)


if __name__ == "__main__":
    unittest.main()

