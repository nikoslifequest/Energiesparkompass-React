import { forwardRef } from 'react'

// Container Component für zentrierte Inhalte
export const Container = forwardRef(({ 
  size = 'xl',
  padding = 'md',
  className = '',
  children,
  ...props 
}, ref) => {

  const sizes = {
    sm: 'max-w-2xl', // 672px
    md: 'max-w-4xl', // 896px
    lg: 'max-w-6xl', // 1152px
    xl: 'max-w-7xl', // 1280px
    full: 'max-w-full',
  }

  const paddings = {
    none: '',
    sm: 'px-4 sm:px-6',
    md: 'px-4 sm:px-6 lg:px-8',
    lg: 'px-6 sm:px-8 lg:px-12',
  }

  const combinedClasses = [
    'mx-auto',
    sizes[size],
    paddings[padding],
    className
  ].filter(Boolean).join(' ')

  return (
    <div 
      ref={ref}
      className={combinedClasses}
      {...props}
    >
      {children}
    </div>
  )
})

// Grid Component für CSS Grid Layouts
export const Grid = forwardRef(({ 
  cols = 1,
  gap = 'md',
  className = '',
  children,
  ...props 
}, ref) => {

  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
    6: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6',
    12: 'grid-cols-12',
  }

  const gaps = {
    none: 'gap-0',
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-8',
  }

  const combinedClasses = [
    'grid',
    gridCols[cols] || `grid-cols-${cols}`,
    gaps[gap],
    className
  ].filter(Boolean).join(' ')

  return (
    <div 
      ref={ref}
      className={combinedClasses}
      {...props}
    >
      {children}
    </div>
  )
})

// Stack Component für vertikale Layouts
export const Stack = forwardRef(({ 
  spacing = 'md',
  align = 'stretch',
  className = '',
  children,
  ...props 
}, ref) => {

  const spacings = {
    none: 'space-y-0',
    xs: 'space-y-1',
    sm: 'space-y-2',
    md: 'space-y-4',
    lg: 'space-y-6',
    xl: 'space-y-8',
  }

  const alignments = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch',
  }

  const combinedClasses = [
    'flex flex-col',
    spacings[spacing],
    alignments[align],
    className
  ].filter(Boolean).join(' ')

  return (
    <div 
      ref={ref}
      className={combinedClasses}
      {...props}
    >
      {children}
    </div>
  )
})

// Flex Component für horizontale Layouts
export const Flex = forwardRef(({ 
  direction = 'row',
  wrap = false,
  justify = 'start',
  align = 'stretch',
  gap = 'md',
  className = '',
  children,
  ...props 
}, ref) => {

  const directions = {
    row: 'flex-row',
    'row-reverse': 'flex-row-reverse',
    col: 'flex-col',
    'col-reverse': 'flex-col-reverse',
  }

  const justifyContent = {
    start: 'justify-start',
    end: 'justify-end',
    center: 'justify-center',
    between: 'justify-between',
    around: 'justify-around',
    evenly: 'justify-evenly',
  }

  const alignItems = {
    start: 'items-start',
    end: 'items-end',
    center: 'items-center',
    baseline: 'items-baseline',
    stretch: 'items-stretch',
  }

  const gaps = {
    none: 'gap-0',
    xs: 'gap-1',
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-8',
  }

  const combinedClasses = [
    'flex',
    directions[direction],
    wrap ? 'flex-wrap' : 'flex-nowrap',
    justifyContent[justify],
    alignItems[align],
    gaps[gap],
    className
  ].filter(Boolean).join(' ')

  return (
    <div 
      ref={ref}
      className={combinedClasses}
      {...props}
    >
      {children}
    </div>
  )
})

// Divider Component für Trennlinien
export const Divider = forwardRef(({ 
  orientation = 'horizontal',
  variant = 'solid',
  color = 'gray-200',
  className = '',
  ...props 
}, ref) => {

  const orientations = {
    horizontal: 'w-full h-px',
    vertical: 'h-full w-px',
  }

  const variants = {
    solid: 'border-0',
    dashed: 'border-dashed border-t',
    dotted: 'border-dotted border-t',
  }

  const colors = {
    'gray-200': 'bg-gray-200',
    'gray-300': 'bg-gray-300',
    'primary-200': 'bg-primary-200',
  }

  const combinedClasses = [
    orientations[orientation],
    variants[variant] === 'border-0' ? colors[color] : `border-${color.replace('bg-', '')}`,
    variants[variant],
    className
  ].filter(Boolean).join(' ')

  return (
    <hr 
      ref={ref}
      className={combinedClasses}
      {...props}
    />
  )
})

Container.displayName = 'Container'
Grid.displayName = 'Grid'
Stack.displayName = 'Stack'
Flex.displayName = 'Flex'
Divider.displayName = 'Divider' 