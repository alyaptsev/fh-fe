# Solution explanations

### Technologies

- `React` for rendering. I have been working with React closely for last 2 years, and React is used by FindHotel. So, no way for another choices :)
- `emotion` for styles. FindHotel uses it. And it have almost the same API as [styled-components](https://github.com/styled-components/styled-components). But if I had more time, I would experiment with zero-runtime libs like [astroturf](https://github.com/4Catalyzer/astroturf) or [linaria](https://github.com/callstack/linaria).
- `effector` as a store. To be honest, using any store with this certain app is overengineering. Sharing data via url doesn't require any extra technologies. But as I mentioned in the last interview, I would like to experiment with atomic stores like [effector](https://github.com/effector/effector) and [reatom](https://github.com/artalar/reatom). Effector looks more production-ready for me and has more clear documentation even though Reatom is more lightweight ([10.4kB](https://bundlephobia.com/result?p=effector@21.8.5) + [1.5kB](https://bundlephobia.com/result?p=effector-react@21.2.1) = 12kB VS [2.3kB](https://bundlephobia.com/result?p=@reatom/core@1.1.5) + [0.8kB](https://bundlephobia.com/result?p=@reatom/react@1.1.4) = 3kB). I think stores like this can help to move business logic outside of React components and use it for markup only. And stores are easy to test, unlike complicated components.

### File structure

I use a bit distorted idea of Feature Slices. For me, it works well for refactoring and dead code elimination. But I stepped back from this idea when wrote a store and placed GuestsModel on a top level to easly share store between different pages (yeah, overengineering).

Also, as you might have noticied, I like to separate components into different files:
- `Component.tsx` for markup;
- `Component.styled.ts` for styles;
- `Component.types.ts` for type declarations;
- `Component.utils.ts` for utility functions which should be tested;
- `index.ts` for reexport and easily enhance components with HOCs. Besides enhancing component in separate file is better for testing - some HOC props is hard to mock.

I believe that this structure improves code readability. But maybe my Angular experience talks for me :)

### Testing

I feel confused everytime someone talking about "unit tests for React component". Tests should be stable and reproducible in any environment for high trust rate.

I really don't like snapshot-testing. Almost everything can break them. You added some div wrapper and nothing visually changed - your test failed. You passed some prop through component and nothing changed for component - your test failed. You updated jest - your test failed. I can't trust tests which are always red. These tests good for a11ty or metrics attributes testing, but nothing more. Also it's easy not to notice some breaking changes while reading monstrous diffs.

Also I don't like behavioral tests that run with Node. They can't be trusted because of implementation bottleneck. jsdom will never behave the same way as real DOM. The most striking example is clicking on disabled button. I think behavioral tests should run in browser only.

For me, the best tests set is:
- unit tests for separated from markup business logic
- screenshot testing for styles and markup
- template tests for html attributes
- in-browser integration tests for complicated components like datepickers, multiinputs and so on
- app e2e-tests for critical scenarios

As for tests for this assignment, I gave some examples of store and React hooks testing. There is weird data initialization in last test (`should not add child to room if limit reached`) and skipped test (`should not add new rooms if limit reached`) because of effector needs babel for generating stores sids. Also I have skipped `useAnimation` tests bacause of jest configuration issues. Sadly, I had no time for experiments with webpack and jest configuration. But I can assure that `useAnimation` tests are correct 'cos I use this hook in my other projects.

### What to improve

- styles for better user experience: focus, active and disabled states for simple ui components like buttons, inputs, selects;
- responsive styles for app: I used only 360x640;
- performance optimization: I hadn't checked rerenders counts
- tests :)
