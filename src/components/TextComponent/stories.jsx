import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Suscipit ab accusamus perferendis, dolores quia corporis
    molestias sequi fuga culpa. Earum voluptas fugiat fugit
    sint asperiores reprehenderit natus at dolores mollitia!`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
