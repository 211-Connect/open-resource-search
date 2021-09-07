import Text from 'src/components/elements/Text/Text';

import Category from './Category/Category';
import data from '../../../../data/categories.json';
import { CategoriesContainer, Container } from './Categories.styles';

export default function Categories() {
  return (
    <Container>
      <CategoriesContainer>
        <Text variant="h2" color="primary" paragraph>
          Search Service by Category
        </Text>
      </CategoriesContainer>

      <CategoriesContainer>
        {data.map((d) => {
          return <Category key={d.categoryName} data={d} />;
        })}
      </CategoriesContainer>
    </Container>
  );
}
