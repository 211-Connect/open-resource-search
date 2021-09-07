import Text from 'src/components/elements/Text/Text';
import Link from 'src/components/elements/Link/Link';
import Flex from 'src/components/elements/Flex/Flex';
import Box from 'src/components/elements/Box/Box';
import { useAppDispatch, useAppSelector } from 'src/redux/store';
import { setQuery } from 'src/redux/slices/search';

export default function Category({ data }) {
  const dispatch = useAppDispatch();
  const location = useAppSelector((state) => state.search.location);

  function clearQuery() {
    dispatch(setQuery(''));
  }

  return (
    <Flex flex="1 1 25%" marginBottom="32px" marginRight="32px">
      <Box>
        <img
          alt=""
          src={data.categoryImage}
          width={36}
          height="auto"
          style={{
            marginRight: 16,
          }}
        />
      </Box>
      <Box>
        <Text variant="h3" color="primary" marginBottom="8px">
          {data.categoryName}
        </Text>
        <Flex flexDirection="column">
          {data.categories.map((cat) => {
            let href = `/search?taxonomies=${cat.id}`;

            if (location != null && location.length > 0) {
              href += `&location=${location}`;
            }

            return (
              <Link
                onClick={clearQuery}
                key={cat.name}
                href={href}
                variant="normal"
                color="primary"
                marginBottom="4px"
              >
                {cat.name}
              </Link>
            );
          })}
        </Flex>
      </Box>
    </Flex>
  );
}
